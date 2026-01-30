import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full px-5 py-3 rounded-2xl bg-zinc-50 border ${
            error ? 'border-red-300' : 'border-zinc-100'
          } focus:border-pink-300 focus:ring-4 focus:ring-pink-100 transition-all outline-none resize-none ${className}`}
          {...props}
        />
        {error && <p className="text-red-500 text-sm ml-1">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
