import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'default', isLoading, children, disabled, ...props }, ref) => {

        const variants = {
            primary: "bg-primary text-white hover:bg-indigo-700 shadow-lg shadow-primary/25",
            secondary: "bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20",
            outline: "border border-gray-300 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5",
            ghost: "hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300",
        };

        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        };

        return (
            <button
                ref={ref}
                disabled={isLoading || disabled}
                className={`
          flex items-center justify-center rounded-lg font-medium transition-all
          disabled:opacity-70 disabled:cursor-not-allowed
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
