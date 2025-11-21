import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

export default function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats = [],
  image,
}) {
  return (
    <section className="section bg-gradient-to-b from-white to-surface/50">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_480px] lg:items-center lg:gap-16">
          <div className="space-y-8">
            {eyebrow && <Badge variant="default">{eyebrow}</Badge>}
            {title && (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-lg md:text-xl text-[#6d6d6d] leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
            {(primaryAction || secondaryAction) && (
              <div className="flex flex-wrap items-center gap-4">
                {primaryAction && (
                  <Button href={primaryAction.href} variant="primary" size="lg">
                    {primaryAction.label}
                  </Button>
                )}
                {secondaryAction && (
                  <Button href={secondaryAction.href} variant="ghost" size="lg">
                    {secondaryAction.label}
                  </Button>
                )}
              </div>
            )}
            {stats.length > 0 && (
              <div className="grid grid-cols-3 gap-4 pt-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-[#e7e7e7] rounded-xl p-4 shadow-sm"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-[#5bad6a]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#6d6d6d] mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {image && (
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width ?? 1920}
                height={image.height ?? 1080}
                className="object-cover w-full h-full aspect-video lg:aspect-square"
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
