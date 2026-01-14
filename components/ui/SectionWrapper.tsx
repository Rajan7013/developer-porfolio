import React from 'react';

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="container">
                {children}
            </div>
        </section>
    );
}
