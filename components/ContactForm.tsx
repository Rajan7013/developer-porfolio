'use client';

import React, { useState } from 'react';
import Button from './ui/Button';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-text-secondary mb-6">
                    We&apos;ll get back to you within 24 hours.
                </p>
                <Button onClick={() => setStatus('idle')} variant="secondary">
                    Send Another Message
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl border border-gray-800">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="John Doe"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="john@company.com"
                />
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                    Company (Optional)
                </label>
                <input
                    type="text"
                    id="company"
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="Acme Inc."
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="Tell us about your project..."
                />
            </div>

            <Button type="submit" size="large" className="w-full" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    );
}
