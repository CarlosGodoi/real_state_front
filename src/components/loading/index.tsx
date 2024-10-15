import React from "react";

interface ILoadingProps {
    size?: 'small' | 'medium' | 'large' | number;
    color?: string;
    className?: string;
}

const Loading: React.FC<ILoadingProps> = ({
    size = 'medium',
    color = 'purple_75',
    className = ''
}) => {
    const getSizeClasses = (size: 'small' | 'medium' | 'large' | number) => {
        if (typeof size === 'number') {
            return `h-${size} w-${size}`;
        }
        switch (size) {
            case 'small':
                return 'h-4 w-4';
            case 'large':
                return 'h-16 w-16';
            default:
                return 'h-8 w-8';
        }
    };

    const outerSizeClasses = getSizeClasses(size);
    const innerSizeClasses = typeof size === 'number'
        ? `h-${size - 2} w-${size - 2}`
        : size === 'small' ? 'h-3 w-3' : size === 'medium' ? 'h-6 w-6' : 'h-10 w-10';

    return (
        <div className={`flex justify-center items-center ${className}`}>
            <div className={`flex items-center justify-center ${outerSizeClasses} rounded-full border-4 border-dashed border-${color} animate-spin duration-1000`}>
                <div className={`${innerSizeClasses} rounded-full`}></div>
            </div>
        </div>
    );
};

export default Loading;
