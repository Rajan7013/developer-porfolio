import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
}

export default function Card({ children, className = '', hover = true, glow = false }: CardProps) {
    const baseStyles = 'bg-card rounded-lg p-6';
    const hoverStyles = hover ? 'card-hover' : '';
    const glowStyles = glow ? 'hover:shadow-accent/30' : '';

    return (
        <div className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}>
            {children}
        </div>
    );
}
