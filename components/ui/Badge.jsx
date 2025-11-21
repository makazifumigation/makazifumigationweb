import { cn } from '@/lib/utils';

export default function Badge({ children, className, variant = 'default', ...props }) {
  const variants = {
    default: 'bg-[#5bad6a]/10 text-[#5bad6a]',
    secondary: 'bg-[#1a1a1a]/10 text-[#1a1a1a]',
    muted: 'bg-[#f6f6f6] text-[#6d6d6d]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

