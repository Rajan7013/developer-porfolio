import React from 'react';
import Button from '../ui/Button';

export default function CTASection() {
    return (
        <section className="py-24 bg-gradient-to-br from-accent/10 via-purple-600/10 to-accent/10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        Ready to Build for{' '}
                        <span className="text-gradient">Relentless Growth</span>?
                    </h2>

                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Let&apos;s discuss how we can engineer solutions that scale with your ambitions.
                    </p>

                    <div className="pt-4">
                        <Button href="/consultation" size="large" className="text-lg px-12 py-5">
                            Get a Free Consultation
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
