import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  delay?: string;
}

export function Card({
  children,
  hover = false,
  delay = '',
  className = '',
  ...props
}: CardProps) {
  const hoverStyles = hover
    ? 'hover:bg-white hover:shadow-2xl hover:-translate-y-2'
    : '';

  return (
    <div
      className={`p-8 rounded-3xl border border-pink-50 bg-pink-50/30 transition-all duration-300 transform reveal opacity-0 translate-y-10 ${hoverStyles} ${delay} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
