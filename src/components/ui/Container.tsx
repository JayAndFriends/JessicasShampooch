import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export function Container({
  children,
  size = 'lg',
  className = '',
  ...props
}: ContainerProps) {
  const sizeStyles = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={`container mx-auto px-4 ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
