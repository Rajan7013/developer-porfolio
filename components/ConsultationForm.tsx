'use client';

import React, { useState } from 'react';
import Button from './ui/Button';

export default function ConsultationForm() {
    const [step, setStep] = useState(1);

    return (
        <form className="bg-card p-8 md:p-10 rounded-2xl border border-gray-800 shadow-xl">
            <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-accent">Step {step} of 2</span>
                    <span className="text-xs text-gray-500">Confidential</span>
                </div>
                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-accent transition-all duration-300"
                        style={{ width: `${(step / 2) * 100}%` }}
                    />
                </div>
            </div>

            {step === 1 ? (
                <div className="space-y-6 animate-fade-in-up">
                    <h3 className="text-2xl font-bold text-white mb-6">Tell us about your business</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                            <input type="text" className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                            <input type="text" className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Business Email</label>
                        <input type="email" className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">What best describes you?</label>
                        <select className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
                            <option>Startup Founder</option>
                            <option>Product Manager</option>
                            <option>Executive / C-Level</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <Button onClick={() => setStep(2)} className="w-full mt-4" size="large">
                        Next Step →
                    </Button>
                </div>
            ) : (
                <div className="space-y-6 animate-fade-in-up">
                    <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">What are you looking to build?</label>
                        <textarea rows={3} className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent" placeholder="Briefly describe your project..." />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Estimated Budget</label>
                            <select className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
                                <option>$10k - $25k</option>
                                <option>$25k - $50k</option>
                                <option>$50k - $100k</option>
                                <option>$100k+</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Target Timeline</label>
                            <select className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent">
                                <option>ASAP (&lt; 1 month)</option>
                                <option>1-3 months</option>
                                <option>3-6 months</option>
                                <option>Flexible</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <Button onClick={() => setStep(1)} variant="secondary" className="w-1/3">
                            ← Back
                        </Button>
                        <Button type="submit" size="large" className="w-2/3">
                            Request Consultation
                        </Button>
                    </div>
                </div>
            )}
        </form>
    );
}
