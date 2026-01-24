import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'default' | 'large';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'default',
    href,
    onClick,
    className = '',
    type = 'button',
    disabled = false,
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300';
    const cursorStyles = disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer';

    const variantStyles = {
        primary: 'bg-accent text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-accent/50',
        secondary: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
    };

    const sizeStyles = {
        default: 'px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base',
        large: 'px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg',
    };

    // If disabled, remove hover effects from variant styles roughly or just let opacity handle it
    // For simplicity, we keep classes but opacity makes it look disabled. 
    // Ideally we might want to suppress hover if disabled.
    const activeVariantStyle = disabled && variant === 'primary'
        ? 'bg-accent text-white'
        : disabled && variant === 'secondary'
            ? 'border-2 border-accent text-accent'
            : variantStyles[variant];

    const combinedStyles = `${baseStyles} ${cursorStyles} ${activeVariantStyle} ${sizeStyles[size]} ${className}`;

    if (href && !disabled) {
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        );
    } else if (href && disabled) {
        // If disabled link, render as span or button that does nothing
        return (
            <span className={combinedStyles}>
                {children}
            </span>
        )
    }

    return (
        <button type={type} onClick={onClick} className={combinedStyles} disabled={disabled}>
            {children}
        </button>
    );
}
