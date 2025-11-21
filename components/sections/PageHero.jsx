import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="section bg-gradient-to-b from-white to-surface/50">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-12">
          <div className="space-y-6">
            {eyebrow && (
              <Badge variant="default">{eyebrow}</Badge>
            )}
            {title && (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-lg md:text-xl text-[#6d6d6d] leading-relaxed max-w-3xl">
                {description}
              </p>
            )}
          </div>
          {children && (
            <Card variant="muted" className="lg:mb-0">
              {children}
            </Card>
          )}
        </div>
      </Container>
    </section>
  );
}

