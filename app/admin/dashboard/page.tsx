'use client';

import React, { useState, useEffect } from 'react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Lock, RefreshCw, Eye, Clock, Globe, MousePointer, ChevronRight, Activity, TrendingUp, Users, Smartphone, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION ---
const PIN_CODE = process.env.NEXT_PUBLIC_ADMIN_PIN || '1234';
const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6']; // Modern vibrant palette

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState('');

    // --- MOCK DATA ENGINE ---
    const generateMockData = () => {
        const pages = ['/', '/about', '/projects', '/contact', '/services/web-dev'];
        const countries = ['USA', 'India', 'UK', 'Canada', 'Germany', 'Australia', 'Japan', 'France'];
        const devices = ['Desktop', 'iPhone', 'Android', 'iPad', 'MacBook'];
        const types = ['view', 'click', 'scroll', 'submit'];

        const mockData = [];
        const now = new Date();

        // Generate realistic trend data
        for (let i = 0; i < 200; i++) {
            const timeOffset = Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000); // last 7 days
            const date = new Date(now.getTime() - timeOffset);

            mockData.push({
                id: Math.random().toString(36).substr(2, 9),
                timestamp: date.toISOString(),
                type: types[Math.floor(Math.random() * types.length)],
                page: pages[Math.floor(Math.random() * pages.length)],
                duration: Math.floor(Math.random() * 180) + 5,
                country: countries[Math.floor(Math.random() * countries.length)],
                device: devices[Math.floor(Math.random() * devices.length)]
            });
        }
        return mockData.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    };

    const fetchData = () => {
        setLoading(true);
        setError('');

        // Simulate network request with a "Live Data" feel
        setTimeout(() => {
            const mockData = generateMockData();
            setData(mockData);
            setLoading(false);
        }, 1200);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            if (pin === PIN_CODE) {
                setIsAuthenticated(true);
                fetchData();
            } else {
                setError('Access Denied: Invalid PIN');
                setLoading(false);
            }
        }, 800);
    };

    // --- DATA PROCESSING (MEMOIZED FEEL) ---
    const stats = React.useMemo(() => {
        if (!data.length) return { views: 0, avgDuration: 0, byPage: [], byCountry: [], byDevice: [], trend: [] };

        const views = data.length;

        // Avg Duration
        const totalDuration = data.reduce((acc, curr) => acc + (parseInt(curr.duration) || 0), 0);
        const avgDuration = views ? Math.round(totalDuration / views) : 0;

        // Group by Page
        const pages: Record<string, number> = {};
        data.forEach(d => pages[d.page] = (pages[d.page] || 0) + 1);
        const byPage = Object.entries(pages)
            .map(([name, value]) => ({ name, value }))
            .sort((a, b) => b.value - a.value)
            .slice(0, 5);

        // Group by Device
        const devices: Record<string, number> = {};
        data.forEach(d => devices[d.device] = (devices[d.device] || 0) + 1);
        const byDevice = Object.entries(devices).map(([name, value]) => ({ name, value }));

        // Daily Trend (Last 7 Days)
        const days: Record<string, number> = {};
        data.forEach(d => {
            const dateStr = new Date(d.timestamp).toLocaleDateString('en-US', { weekday: 'short' });
            days[dateStr] = (days[dateStr] || 0) + 1;
        });
        const trend = Object.entries(days).map(([name, value]) => ({ name, value }));

        return { views, avgDuration, byPage, byDevice, trend };
    }, [data]);

    // --- TECH STACK DATA (Managed State) ---
    const [activeTab, setActiveTab] = useState('overview');
    const [techStack, setTechStack] = useState([
        { category: "Frontend", items: [{ icon: '⚛️', name: 'React.js' }, { icon: '▲', name: 'Next.js' }, { icon: '🎨', name: 'Tailwind' }] },
        { category: "Backend", items: [{ icon: '🟢', name: 'Node.js' }, { icon: '🐍', name: 'Python' }, { icon: '🔥', name: 'Firebase' }] },
        { category: "AI & ML", items: [{ icon: '🧠', name: 'OpenAI' }, { icon: '♊', name: 'Gemini' }] }
    ]);
    const [newTech, setNewTech] = useState({ name: '', icon: '', category: 'Frontend' });
    const [showAddModal, setShowAddModal] = useState(false);

    const handleAddTech = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedStack = techStack.map(cat => {
            if (cat.category === newTech.category) {
                return { ...cat, items: [...cat.items, { name: newTech.name, icon: newTech.icon || '🔹' }] };
            }
            return cat;
        });
        setTechStack(updatedStack);
        setShowAddModal(false);
        setNewTech({ name: '', icon: '', category: 'Frontend' });
    };

    const handleDeleteTech = (categoryName: string, techName: string) => {
        const updatedStack = techStack.map(cat => {
            if (cat.category === categoryName) {
                return { ...cat, items: cat.items.filter(item => item.name !== techName) };
            }
            return cat;
        });
        setTechStack(updatedStack);
    };

    // --- RENDER HELPERS ---
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-900/95 border border-white/10 p-3 rounded-xl shadow-xl backdrop-blur-md">
                    <p className="text-gray-400 text-xs mb-1">{label}</p>
                    <p className="text-skin font-bold text-lg">{payload[0].value} <span className="text-xs font-normal text-gray-500">Events</span></p>
                </div>
            );
        }
        return null;
    };

    // ----------------------------------------------------------------------
    // LOGIN SCREEN
    // ----------------------------------------------------------------------
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
                {/* Ambient Background */}
                <div className="absolute top-0 -left-20 w-96 h-96 bg-skin/20 rounded-full blur-[100px] opacity-20 animate-pulse" />
                <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] opacity-20 animate-pulse delay-1000" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-900/40 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/5 w-full max-w-md shadow-2xl relative z-10"
                >
                    <div className="flex justify-center mb-8">
                        <div className="p-4 bg-linear-to-br from-skin/20 to-transparent rounded-2xl border border-skin/10 shadow-[0_0_30px_rgba(var(--skin-color-rgb),0.15)]">
                            <Lock size={32} className="text-skin" />
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Admin Portal</h2>
                        <p className="text-gray-400 text-sm">Restricted access environment</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="relative group">
                            <input
                                type="password"
                                value={pin}
                                onChange={(e) => { setPin(e.target.value); setError(''); }}
                                placeholder="ENTER PIN CODE"
                                className="w-full px-4 py-4 bg-black/50 text-white border border-white/10 rounded-xl focus:border-skin/50 focus:ring-1 focus:ring-skin/50 outline-none text-center text-xl tracking-[0.5em] placeholder-gray-600 font-bold transition-all group-hover:border-white/20"
                                autoFocus
                            />
                        </div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 text-center text-sm font-medium bg-red-500/10 py-2 rounded-lg border border-red-500/10"
                            >
                                {error}
                            </motion.p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 bg-skin text-white rounded-xl font-bold tracking-wide transition-all ${loading ? 'opacity-70 cursor-wait' : 'hover:scale-[1.02] hover:shadow-lg hover:shadow-skin/25'
                                }`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <RefreshCw className="animate-spin" size={20} /> Authenticating...
                                </span>
                            ) : (
                                'UNLOCK SYSTEM'
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-500 uppercase tracking-widest opacity-50">S E C U R E D &nbsp; C O N N E C T I O N</p>
                    </div>
                </motion.div>
            </div>
        );
    }

    // ----------------------------------------------------------------------
    // DASHBOARD UI
    // ----------------------------------------------------------------------
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-skin/30">
            {/* TOP NAVIGATION */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 h-16 flex items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-skin rounded-lg">
                            <Shield size={18} className="text-white" fill="currentColor" />
                        </div>
                        <span className="font-bold text-lg tracking-tight">Admin<span className="text-skin">Console</span></span>
                    </div>

                    <div className="hidden md:flex items-center gap-1">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('stack')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'stack' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            Tech Stack
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-yellow-500/5 border border-yellow-500/10 rounded-full">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                        </span>
                        <span className="text-xs font-bold text-yellow-500 uppercase tracking-wider">Demo Mode Active</span>
                    </div>
                    <button
                        onClick={fetchData}
                        disabled={loading}
                        className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white"
                        title="Refresh Data"
                    >
                        <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
                    </button>
                </div>
            </nav>

            {/* MAIN CONTENT */}
            <main className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">

                {/* -------------------- OVERVIEW TAB -------------------- */}
                {activeTab === 'overview' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        {/* WELCOME HEADER */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
                        >
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-500 mb-2">
                                    Overview
                                </h1>
                                <p className="text-gray-400 text-lg">System performance & traffic analytics</p>
                            </div>
                            <div className="text-right hidden md:block">
                                <p className="text-sm text-gray-500 font-mono">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                        </motion.div>

                        {/* KPI GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <KPICard
                                title="Total Events"
                                value={stats.views}
                                icon={Activity}
                                color="text-blue-500"
                                bg="bg-blue-500/10"
                                delay={0.1}
                            />
                            <KPICard
                                title="Avg Duration"
                                value={`${stats.avgDuration}s`}
                                icon={Clock}
                                color="text-emerald-500"
                                bg="bg-emerald-500/10"
                                delay={0.2}
                            />
                            <KPICard
                                title="Unique Devices"
                                value={stats.byDevice.length}
                                icon={Smartphone}
                                color="text-purple-500"
                                bg="bg-purple-500/10"
                                delay={0.3}
                            />
                            <KPICard
                                title="Conversion Rate"
                                value="2.4%"
                                icon={TrendingUp}
                                color="text-pink-500"
                                bg="bg-pink-500/10"
                                delay={0.4}
                            />
                        </div>

                        {/* CHARTS ROW 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            {/* AREA CHART - ACTIVITY */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="lg:col-span-2 bg-gray-900/40 backdrop-blur-md rounded-3xl border border-white/5 p-6 shadow-xl"
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-200">Traffic Trends</h3>
                                    <button className="text-xs font-bold text-gray-500 hover:text-white bg-white/5 px-3 py-1 rounded-full transition-colors">Last 7 Days</button>
                                </div>
                                <div className="h-[300px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={stats.trend}>
                                            <defs>
                                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="var(--skin-color)" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="var(--skin-color)" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                            <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                                            <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Area type="monotone" dataKey="value" stroke="var(--skin-color)" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </motion.div>

                            {/* PIE CHART - DEVICES */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="bg-gray-900/40 backdrop-blur-md rounded-3xl border border-white/5 p-6 shadow-xl flex flex-col"
                            >
                                <h3 className="text-xl font-bold text-gray-200 mb-6">Device Usage</h3>
                                <div className="flex-1 min-h-[250px] relative">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={stats.byDevice}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={100}
                                                paddingAngle={5}
                                                dataKey="value"
                                                stroke="none"
                                            >
                                                {stats.byDevice.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip content={<CustomTooltip />} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    {/* Donuts Center Stats */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="text-3xl font-bold text-white">{stats.byDevice.length}</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    {stats.byDevice.map((entry, index) => (
                                        <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                            <span className="truncate">{entry.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* BOTTOM GRID */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* TOP PAGES BAR CHART */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="bg-gray-900/40 backdrop-blur-md rounded-3xl border border-white/5 p-6 shadow-xl"
                            >
                                <h3 className="text-xl font-bold text-gray-200 mb-6">Popular Pages</h3>
                                <div className="h-[300px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={stats.byPage} layout="vertical" barSize={20}>
                                            <CartesianGrid stroke="rgba(255,255,255,0.05)" horizontal={false} />
                                            <XAxis type="number" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                                            <YAxis dataKey="name" type="category" stroke="#999" fontSize={12} width={100} tickLine={false} axisLine={false} />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                                                {stats.byPage.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill="var(--skin-color)" fillOpacity={0.8 - (index * 0.15)} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </motion.div>

                            {/* LIVE FEED TABLE */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="bg-gray-900/40 backdrop-blur-md rounded-3xl border border-white/5 p-6 shadow-xl overflow-hidden"
                            >
                                <h3 className="text-xl font-bold text-gray-200 mb-6 flex items-center gap-2">
                                    Live Feed <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                </h3>
                                <div className="overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
                                    <table className="w-full text-left border-separate border-spacing-y-2">
                                        <thead>
                                            <tr className="text-xs uppercase text-gray-500 font-bold tracking-wider">
                                                <th className="pb-2 pl-2">Type</th>
                                                <th className="pb-2">Page</th>
                                                <th className="pb-2 text-right">Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <AnimatePresence>
                                                {data.slice(0, 8).map((row) => (
                                                    <motion.tr
                                                        key={row.id}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg group"
                                                    >
                                                        <td className="py-3 pl-3 rounded-l-lg">
                                                            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${row.type === 'view' ? 'bg-blue-500/10 text-blue-500' :
                                                                row.type === 'click' ? 'bg-purple-500/10 text-purple-500' :
                                                                    'bg-gray-500/10 text-gray-400'
                                                                }`}>
                                                                {row.type}
                                                            </span>
                                                        </td>
                                                        <td className="py-3 text-sm text-gray-300 font-medium">{row.page}</td>
                                                        <td className="py-3 pr-3 rounded-r-lg text-right text-xs text-gray-500 font-mono">
                                                            {new Date(row.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                                        </td>
                                                    </motion.tr>
                                                ))}
                                            </AnimatePresence>
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* -------------------- TECH STACK TAB -------------------- */}
                {activeTab === 'stack' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">Tech Stack Manager</h2>
                                <p className="text-gray-400">Manage frameworks, languages, and tools</p>
                            </div>
                            <button
                                onClick={() => setShowAddModal(true)}
                                className="px-6 py-2 bg-skin text-white font-bold rounded-xl shadow-lg shadow-skin/25 hover:opacity-90 transition-all flex items-center gap-2"
                            >
                                <span className="text-2xl leading-none font-light">+</span> Add Technology
                            </button>
                        </div>

                        {/* Add Modal */}
                        <AnimatePresence>
                            {showAddModal && (
                                <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
                                    <motion.div
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                                        onClick={() => setShowAddModal(false)}
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                                        className="bg-gray-900 border border-white/10 p-8 rounded-3xl w-full max-w-md relative z-10 shadow-2xl"
                                    >
                                        <h3 className="text-2xl font-bold mb-6">Add New Technology</h3>
                                        <form onSubmit={handleAddTech} className="space-y-4">
                                            <div>
                                                <label className="block text-sm text-gray-400 mb-1">Category</label>
                                                <select
                                                    value={newTech.category}
                                                    onChange={e => setNewTech({ ...newTech, category: e.target.value })}
                                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-skin"
                                                >
                                                    {techStack.map(c => <option key={c.category} value={c.category}>{c.category}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-400 mb-1">Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={newTech.name}
                                                    onChange={e => setNewTech({ ...newTech, name: e.target.value })}
                                                    placeholder="e.g. Next.js"
                                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-skin"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-gray-400 mb-1">Icon (Emoji)</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={newTech.icon}
                                                    onChange={e => setNewTech({ ...newTech, icon: e.target.value })}
                                                    placeholder="e.g. 🚀"
                                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-skin"
                                                />
                                            </div>
                                            <div className="flex gap-3 mt-6">
                                                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 py-3 rounded-xl hover:bg-white/5 transition-colors font-semibold">Cancel</button>
                                                <button type="submit" className="flex-1 py-3 rounded-xl bg-skin text-white font-bold shadow-lg shadow-skin/25 hover:opacity-90 transition-all">Add Item</button>
                                            </div>
                                        </form>
                                    </motion.div>
                                </div>
                            )}
                        </AnimatePresence>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {techStack.map((cat, idx) => (
                                <motion.div
                                    key={cat.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-gray-900/40 backdrop-blur-md rounded-3xl border border-white/5 p-6 shadow-xl"
                                >
                                    <h3 className="text-xl font-bold bg-white/5 inline-block px-4 py-1.5 rounded-lg mb-4 text-skin border border-skin/20">
                                        {cat.category}
                                    </h3>
                                    <div className="space-y-3">
                                        {cat.items.map((item, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-xl">{item.icon}</span>
                                                    <span className="font-medium text-gray-200">{item.name}</span>
                                                </div>
                                                <button
                                                    onClick={() => handleDeleteTech(cat.category, item.name)}
                                                    className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                                                    title="Remove"
                                                >
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                                </button>
                                            </div>
                                        ))}
                                        {cat.items.length === 0 && (
                                            <div className="text-center py-4 text-gray-600 italic">No technologies added</div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

            </main>
        </div>
    );
}

// --- SUB COMPONENTS ---
function KPICard({ title, value, icon: Icon, color, bg, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.3 }}
            className="bg-gray-900/40 backdrop-blur-md p-6 rounded-3xl border border-white/5 shadow-lg hover:border-white/10 transition-all hover:-translate-y-1 relative overflow-hidden group"
        >
            <div className={`absolute top-0 right-0 p-3 rounded-bl-2xl ${bg} ${color} transition-all group-hover:scale-110`}>
                <Icon size={24} />
            </div>
            <h4 className="text-gray-400 text-sm font-medium mb-1">{title}</h4>
            <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
        </motion.div>
    );
}
