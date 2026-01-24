'use client';

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Lock, RefreshCw, Eye, Clock, Globe, MousePointer } from 'lucide-react';

import { GOOGLE_SCRIPT_URL } from '@/lib/analytics';

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === '1234') { // Simple client-side PIN (matches Apps Script)
            setIsAuthenticated(true);
            fetchData();
        } else {
            setError('Invalid PIN');
        }
    };

    const fetchData = async () => {
        setLoading(true);
        if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE') {
            setError('Please configure Google Apps Script URL');
            setLoading(false);
            return;
        }

        try {
            // We use POST with action='get_data' because getting data from GET in some CORS setups is harder
            // or we used doPost in Apps Script to handle everything.
            // Wait, my Apps Script update used doPost for 'get_data'.

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'cors', // We need to READ the response, so we need CORS
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({ action: 'get_data', pin: '1234' })
            });

            const result = await response.json();
            if (result.status === 'success') {
                setData(result.data);
            } else {
                setError(result.message || 'Failed to fetch data');
            }
        } catch (err) {
            console.error(err);
            // Fallback for dev/demo if script not ready
            // setData(mockData); 
            setError('Error connecting to backend. Make sure script is deployed as "Anyone".');
        } finally {
            setLoading(false);
        }
    };

    // Process Data for Charts
    const processData = () => {
        if (!data.length) return { views: 0, avgDuration: 0, byPage: [], byCountry: [], byDevice: [] };

        const views = data.filter(d => d.type === 'view').length;

        // Avg Duration
        const durationData = data.filter(d => d.duration);
        const totalDuration = durationData.reduce((acc, curr) => acc + (parseInt(curr.duration) || 0), 0);
        const avgDuration = durationData.length ? Math.round(totalDuration / durationData.length) : 0;

        // By Page
        const pages: Record<string, number> = {};
        data.filter(d => d.type === 'view').forEach(d => {
            const p = d.page || 'Unknown';
            pages[p] = (pages[p] || 0) + 1;
        });
        const byPage = Object.entries(pages).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value).slice(0, 5);

        // By Country
        const countries: Record<string, number> = {};
        data.filter(d => d.type === 'view').forEach(d => {
            const c = d.country || 'Unknown';
            countries[c] = (countries[c] || 0) + 1;
        });
        const byCountry = Object.entries(countries).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);

        // By Device
        const devices: Record<string, number> = {};
        data.forEach(d => {
            const dev = d.device || 'Unknown';
            devices[dev] = (devices[dev] || 0) + 1;
        });
        const byDevice = Object.entries(devices).map(([name, value]) => ({ name, value }));

        return { views, avgDuration, byPage, byCountry, byDevice };
    };

    const stats = processData();
    const COLORS = ['#ec1839', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-bg-black flex items-center justify-center p-4">
                <div className="bg-bg-black-100 p-8 rounded-xl border border-gray-800 w-full max-w-md">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-skin/10 rounded-full text-skin">
                            <Lock size={32} />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center text-white mb-6">Admin Access</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            placeholder="Enter PIN"
                            className="w-full px-4 py-3 bg-bg-black text-white border border-gray-700 rounded-lg focus:border-skin outline-none text-center text-lg tracking-widest"
                            autoFocus
                        />
                        {error && <p className="text-red-500 text-center text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="w-full py-3 bg-skin text-white rounded-lg font-bold hover:bg-opacity-90 transition-all"
                        >
                            Unlock Dashboard
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg-black p-4 md:p-8 pt-24 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
                    <button onClick={fetchData} className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors" disabled={loading}>
                        <RefreshCw size={24} className={loading ? 'animate-spin' : ''} />
                    </button>
                </div>

                {error && <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-500 rounded-lg">{error}</div>}

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-bg-black-100 p-6 rounded-xl border border-gray-800">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg"><Eye size={20} /></div>
                            <span className="text-gray-400">Total Views</span>
                        </div>
                        <h3 className="text-3xl font-bold ml-1">{stats.views}</h3>
                    </div>

                    <div className="bg-bg-black-100 p-6 rounded-xl border border-gray-800">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-green-500/10 text-green-500 rounded-lg"><Clock size={20} /></div>
                            <span className="text-gray-400">Avg Duration</span>
                        </div>
                        <h3 className="text-3xl font-bold ml-1">{stats.avgDuration}s</h3>
                    </div>

                    <div className="bg-bg-black-100 p-6 rounded-xl border border-gray-800">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-purple-500/10 text-purple-500 rounded-lg"><Globe size={20} /></div>
                            <span className="text-gray-400">Countries</span>
                        </div>
                        <h3 className="text-3xl font-bold ml-1">{stats.byCountry.length}</h3>
                    </div>

                    <div className="bg-bg-black-100 p-6 rounded-xl border border-gray-800">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-orange-500/10 text-orange-500 rounded-lg"><MousePointer size={20} /></div>
                            <span className="text-gray-400">Interactions</span>
                        </div>
                        <h3 className="text-3xl font-bold ml-1">{data.length}</h3>
                    </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Top Pages */}
                    <div className="bg-bg-black-100 p-6 rounded-xl border border-gray-800 min-h-[400px]">
                        <h3 className="text-xl font-bold mb-6">Top Pages</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={stats.byPage} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                <XAxis type="number" stroke="#888" />
                                <YAxis dataKey="name" type="category" stroke="#888" width={100} />
                                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
                                <Bar dataKey="value" fill="var(--skin-color)" radius={[0, 4, 4, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Device & Country */}
                    <div className="bg-bg-black-100 p-6 rounded-xl border border-gray-800 min-h-[400px]">
                        <h3 className="text-xl font-bold mb-6">Visitors by Device</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={stats.byDevice}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {stats.byDevice.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="flex justify-center gap-4 mt-4">
                            {stats.byDevice.map((entry, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                    {entry.name}: {entry.value}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Activity Table */}
                <div className="bg-bg-black-100 rounded-xl border border-gray-800 overflow-hidden">
                    <div className="p-6 border-b border-gray-800">
                        <h3 className="text-xl font-bold">Recent Activity</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-400">
                            <thead className="bg-black/20 text-gray-200 uppercase font-bold">
                                <tr>
                                    <th className="px-6 py-4">Time</th>
                                    <th className="px-6 py-4">Event</th>
                                    <th className="px-6 py-4">Page</th>
                                    <th className="px-6 py-4">Duration</th>
                                    <th className="px-6 py-4">Country</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                {data.slice().reverse().slice(0, 10).map((row, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(row.timestamp).toLocaleTimeString()}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${row.type === 'view' ? 'bg-blue-500/20 text-blue-500' : 'bg-green-500/20 text-green-500'}`}>
                                                {row.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">{row.page}</td>
                                        <td className="px-6 py-4">{row.duration ? `${row.duration}s` : '-'}</td>
                                        <td className="px-6 py-4">{row.country}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
