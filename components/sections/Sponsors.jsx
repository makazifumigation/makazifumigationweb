import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/sections/SectionHeader";

const sponsors = [
  { id: 1, logo: "/assets/sponsors/01.png", alt: "Partner logo 1" },
  { id: 2, logo: "/assets/sponsors/02.png", alt: "Partner logo 2" },
  { id: 3, logo: "/assets/sponsors/03.png", alt: "Partner logo 3" },
  { id: 4, logo: "/assets/sponsors/04.png", alt: "Partner logo 4" },
  { id: 5, logo: "/assets/sponsors/05.png", alt: "Partner logo 5" },
  { id: 6, logo: "/assets/sponsors/06.png", alt: "Partner logo 6" },
];

export default function Sponsors() {
  return (
    <section className="section-compact">
      <Container>
        <div className="space-y-12">
          <SectionHeader
            eyebrow="Trusted Partners"
            title="Businesses We've Worked With"
            description="We're proud to have served leading organizations across Tanzania, building lasting partnerships based on trust, quality, and results."
            // align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="aspect-video flex items-center justify-center p-4 bg-[#f6f6f6] rounded-xl border border-[#e7e7e7] hover:border-[#5bad6a] hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative aspect-video  w-full transition-all duration-300 opacity-60 group-hover:opacity-100">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.alt}
                    className="object-cover w-full aspect-video "
                    height={1080}
                    width={1920}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
