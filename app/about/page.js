import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const milestones = [
  {
    year: "2015",
    title: "Makazi Fumigation is founded",
    description:
      "We launched in Morogoro to provide reliable residential fumigation for fast-growing neighbourhoods.",
  },
  {
    year: "2018",
    title: "Expanded into commercial pest control",
    description:
      "Makazi introduced integrated pest management programs tailored to hotels, hospitals, and manufacturing plants.",
  },
  {
    year: "2021",
    title: "National coverage achieved",
    description:
      "Regional service hubs enabled rapid response teams in Dodoma, Arusha, Mwanza, Coast, and Zanzibar.",
  },
  {
    year: "2024",
    title: "Certified by global partners",
    description:
      "Makazi received recognition from leading fumigation authorities for eco-conscious pest management.",
  },
];

const values = [
  {
    title: "Safety first",
    description:
      "Every treatment plan is designed around occupant safety, food integrity, and environmental responsibility.",
  },
  {
    title: "Transparency",
    description:
      "Detailed condition reports, photographic evidence, and compliance documentation accompany each visit.",
  },
];

const credentials = [
  "Certified pest control operators by the Tanzanian Pesticide Research Institute",
  "Fully insured technicians with ongoing professional development",
  "Compliant with NEMC, OSHA, TFDA, and municipal health standards",
  "Preferred vendor for hospitality, healthcare, and logistics brands",
];

export const metadata = {
  title: "About Makazi Fumigation",
  description:
    "Learn about Makazi Fumigation—Tanzania's trusted partner for professional fumigation and pest management.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="We're certified."
        description="Makazi Fumigation integrates scientific pest-management expertise, full adherence to national compliance standards, and real-world operational experience to protect homes, businesses, estates, and specialized facilities from both immediate and long-term pest risks."
      >
        <div className="space-y-2 text-sm text-[#6d6d6d]">
          <p>📍 Morogoro, Dar es Salaam</p>
          <p>👥 70+ field technicians nationwide</p>
          <p>🛡️ ISO-aligned operating procedures</p>
        </div>
      </PageHero>

      <section className="section-compact">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="What drives us"
                title="Creating environments that keep pests out."
                description="Precision drives everything we do, from the chemistry we apply to the accuracy of our reporting. Each engagement follows a structured, documented workflow tailored to the specific property and the regulatory standards of its industry."
              />
              <ul className="space-y-3 list-disc list-inside text-[#6d6d6d]">
                {credentials.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/images/about-us.jpg"
                alt="Makazi Fumigation technicians preparing equipment"
                width={720}
                height={540}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-compact bg-[#f6f6f6]">
        <Container>
          <div className="space-y-12">
            <SectionHeader
              eyebrow="Our journey"
              title="From a start-up"
              description="What started as a service has become a trusted partnership. We've earned our reputation by showing up, solving real problems, and building long-term trust with property managers, facility directors, and homeowners throughout Tanzania."
            />
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div
                  key={milestone.year}
                  className="border-l-4 border-primary pl-6 space-y-2"
                >
                  <h3 className="text-xl font-semibold text-[#1a1a1a]">
                    {milestone.year} — {milestone.title}
                  </h3>
                  <p className="text-[#6d6d6d]">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Our values"
                title="We work on principles"
                description="We operate on clear, disciplined principles. Our team integrates seamlessly with your property management or housekeeping staff to ensure every fumigation process is carried out with precision. We prioritize efficiency, discretion, and strict adherence to safety standards, while providing full documentation, from chemical usage logs to post-treatment reports. Every step is designed to protect your residents, preserve your property, and maintain a seamless experience with minimal disruption."
              />
              <div className="grid gap-6 md:grid-cols-2">
                {values.map((value) => (
                  <Card key={value.title} className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#1a1a1a]">
                      {value.title}
                    </h3>
                    <p className="text-[#6d6d6d]">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>
            <Card variant="muted" className="space-y-4">
              <h3 className="text-lg font-semibold text-[#1a1a1a]">
                Meet our leadership
              </h3>
              <p className="text-[#6d6d6d]">
                Our management team that keeps every operation running smoothly.
              </p>
              <div className="space-y-3">
                <div className="rounded-xl bg-white p-4 border border-[#e7e7e7]">
                  <h4 className="font-semibold text-[#1a1a1a]">
                    Kiezera Alfred
                  </h4>
                  <p className="text-sm text-[#6d6d6d]">
                    Director, Operations & Compliance
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 border border-[#e7e7e7]">
                  <h4 className="font-semibold text-[#1a1a1a]">
                    George Mnyasa
                  </h4>
                  <p className="text-sm text-[#6d6d6d]">
                    Lead Entomologist & Technical Trainer
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 border border-[#e7e7e7]">
                  <h4 className="font-semibold text-[#1a1a1a]">Fatma Said</h4>
                  <p className="text-sm text-[#6d6d6d]">
                    Client Services & Key Accounts
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
