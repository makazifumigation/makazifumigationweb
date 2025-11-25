import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Sponsors from "@/components/sections/Sponsors";
import SectionHeader from "@/components/sections/SectionHeader";
import ProjectCard from "@/components/content/ProjectCard";
import BlogCard from "@/components/content/BlogCard";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { fetchVisibleBlogs, fetchVisibleProjects } from "@/lib/firestore";

const featureHighlights = [
  {
    title: "Certified fumigation experts",
    description:
      "Our licensed technicians deliver safe, compliant fumigation for residential, commercial, and industrial facilities.",
    icon: "🎖️",
  },
  {
    title: "Eco-conscious approach",
    description:
      "We choose EPA-approved solutions that protect your people, products, and the environment without compromising results.",
    icon: "🌱",
  },
  {
    title: "Guaranteed protection",
    description:
      "Comprehensive inspections, precise treatments, and detailed reporting keep your property pest-free long term.",
    icon: "🛡️",
  },
];

const services = [
  {
    title: "Residential fumigation",
    description:
      "Tailored treatments for homes, apartments, and estates—targeting cockroaches, termites, bed bugs, and rodents.",
    icon: "🏡",
  },
  {
    title: "Commercial & industrial",
    description:
      "Structured pest management designed for warehouses, hotels, hospitals, schools, and production facilities.",
    icon: "🏭",
  },
  {
    title: "Specialist programs",
    description:
      "Integrated pest management, termite proofing, disinfection, and HACCP-compliant services for sensitive operations.",
    icon: "🧪",
  },
];

const stats = [
  { label: "Years of experience", value: "10+" },
  { label: "Properties serviced", value: "1,500+" },
  { label: "Certified technicians", value: "70+" },
];

const serviceAreas = [
  "Dar es Salaam",
  "Dodoma",
  "Morogoro",
  "Arusha",
  "Mwanza",
  "Zanzibar",
];

export default async function Home() {
  let projects = [];
  let blogs = [];

  try {
    [projects, blogs] = await Promise.all([
      fetchVisibleProjects(3),
      fetchVisibleBlogs(3),
    ]);
  } catch (error) {
    console.error("Failed to load Firestore content", error);
  }

  return (
    <>
      <Hero
        eyebrow="Makazi Fumigation"
        title="Tanzania's trusted choice in pest control."
        description="Makazi Fumigation provides discreet, reliable pest control for homes, hotels, factories, and institutions. We combine certified technicians, eco-conscious chemistry, and meticulous reporting to keep your environments compliant and pest-free."
        primaryAction={{ href: "/contact", label: "Book a site survey" }}
        secondaryAction={{
          href: "/projects",
          label: "See recent projects",
        }}
        stats={stats}
        image={{
          src: "/assets/images/herox.jpg",
          alt: "Makazi technicians delivering fumigation services",
          width: 1920,
          height: 1080,
        }}
      />

      <Sponsors />

      <section className="section-compact">
        <Container>
          <div className="space-y-12">
            <SectionHeader
              eyebrow="Why clients choose Makazi"
              title="Reliable pest control"
              description="Trusted by households, hospitality, healthcare, and FMCG leaders for our safety-first methodology and guaranteed results."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureHighlights.map((feature) => (
                <Card key={feature.title} className="text-center space-y-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a]">
                    {feature.title}
                  </h3>
                  <p className="text-[#6d6d6d]">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="space-y-12">
            <SectionHeader
              eyebrow="Comprehensive Services"
              title="Strategic fumigation"
              description="From urgent infestation control to preventative programs, we engineer solutions specific to your environment and regulatory requirements."
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.title} variant="muted" className="space-y-4">
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a]">
                    {service.title}
                  </h3>
                  <p className="text-[#6d6d6d]">{service.description}</p>
                  <ul className="space-y-2 text-sm text-[#6d6d6d] list-disc list-inside">
                    <li>Site assessment & infestation analysis</li>
                    <li>Custom treatment protocol & scheduling</li>
                    <li>Post-treatment verification & reporting</li>
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-compact bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-center">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Nationwide coverage"
                title="Countrywide Coverage"
                description="Our technicians operate from Dar es Salaam and our regional hub in Morogoro, enabling us to support clients with reliable, well-coordinated fumigation and pest management services across multiple locations. By maintaining strong teams in both regions, we ensure rapid response times, standardized service quality, and seamless coverage for businesses managing multi-site operations throughout Tanzania."
              />
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-white border border-[#e7e7e7] rounded-full text-sm font-medium text-[#1a1a1a]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <Card variant="muted" className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1a1a1a]">
                Looking for a long-term pest prevention partner?
              </h3>
              <p className="text-[#6d6d6d]">
                We build quarterly, bi-annual, and 12-month integrated pest
                management plans tailored to your compliance standards.
              </p>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full"
              >
                Talk to our consultants
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="space-y-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader
                eyebrow="Project portfolio"
                title="Recent projects"
                description="Here's a detailed look at the places we've been working in lately, from everyday homes and residential apartments to busy hotels, manufacturing floors, healthcare centers, warehouses, logistics yards, office spaces, and large estate properties."
              />
              <Button href="/projects" variant="ghost" size="md">
                Browse all projects
              </Button>
            </div>
            {projects.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <Card
                variant="muted"
                className="text-center text-[#6d6d6d] py-12"
              >
                Projects will appear here once published.
              </Card>
            )}
          </div>
        </Container>
      </section>

      <section className="section-compact">
        <Container>
          <div className="space-y-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader
                eyebrow="Makazi Insights"
                title="Stay informed"
                description="Insightful articles featuring practical tips, up to date compliance guidance, and real world case studies from our field specialists—designed to help property managers and businesses stay informed and make smarter pest management decisions."
              />
              <Button href="/blogs" variant="ghost" size="md">
                View all articles
              </Button>
            </div>
            {blogs.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              <Card
                variant="muted"
                className="text-center text-[#6d6d6d] py-12"
              >
                Articles will appear here once published.
              </Card>
            )}
          </div>
        </Container>
      </section>

      <section className="section bg-[#5bad6a]/5">
        <Container>
          <Card className="text-center space-y-6 w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              Ready to eliminate pests and protect your brand?
            </h2>
            <p className="text-lg text-[#6d6d6d]">
              Partner with Makazi Fumigation for proactive pest management, that
              meets local regulations and international standards.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Schedule an inspection
              </Button>
              <Button href="tel:+255685482846" variant="ghost" size="lg">
                Call +255 685 482 846
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
