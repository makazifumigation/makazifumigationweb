import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  size = 'lg',
  className,
}) {
  const maxWidth = size === 'lg' ? 'max-w-3xl' : 'max-w-2xl';
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={cn('space-y-4', maxWidth, alignment, className)}>
      {eyebrow && (
        <div>
          <Badge variant="default">{eyebrow}</Badge>
        </div>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg text-[#6d6d6d] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

