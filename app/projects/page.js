import Link from 'next/link';
import SectionHeader from '@/components/sections/SectionHeader';
import PageHero from '@/components/sections/PageHero';
import ProjectCard from '@/components/content/ProjectCard';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { fetchVisibleProjects } from '@/lib/firestore';

export const metadata = {
  title: 'Projects',
  description:
    'Explore Makazi Fumigation projects, from residential treatments to complex commercial pest management programs.',
};

export default async function ProjectsPage() {
  let projects = [];

  try {
    projects = await fetchVisibleProjects();
  } catch (error) {
    console.error('Failed to fetch projects', error);
  }

  return (
    <>
      <PageHero
        eyebrow="Project portfolio"
        title="We're reliable."
        description="Here's a detailed look at the places we've been working in lately, from everyday homes and residential apartments to busy hotels, manufacturing floors, healthcare centers, warehouses, logistics yards, office spaces, and large estate properties."
      >
        <div className="space-y-2 text-sm text-[#6d6d6d]">
          <p>• Rapid response teams across Tanzania</p>
          <p>• Detailed reporting for regulators and stakeholders</p>
          <p>• Follow-up monitoring and preventative guidance</p>
        </div>
      </PageHero>

      <section className="section-compact">
        <Container>
          <div className="space-y-12">
            <SectionHeader
              eyebrow="Recent engagements"
              title="Measurable results"
              description="Every project follows an assess → treat → verify methodology that reduces downtime and eliminates unexpected pest risks."
            />
            {projects.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <Card variant="muted" className="text-center text-[#6d6d6d] py-12">
                No public projects yet. Check back soon or{' '}
                <Link href="/contact" className="text-[#5bad6a] font-semibold hover:underline">
                  talk to our consultants
                </Link>
                .
              </Card>
            )}
          </div>
        </Container>
      </section>

      <section className="section-compact bg-[#f6f6f6]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
            <div className="space-y-4">
              <SectionHeader
                eyebrow="How we work"
                title="You can count on us."
                description="We align with your operational schedule and health & safety standards to minimise disruption."
              />
              <ul className="space-y-3 list-disc list-inside text-[#6d6d6d]">
                <li>
                  Detailed pre-treatment inspection with photographic evidence
                </li>
                <li>
                  Chemical selection tailored to infestation and environment
                </li>
                <li>
                  Post-treatment monitoring, reporting, and preventative checklist
                </li>
              </ul>
            </div>
            <Card variant="muted" className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1a1a1a]">
                Need a proposal?
              </h3>
              <p className="text-[#6d6d6d]">
                Share your property layout and timelines and we'll prepare a
                detailed treatment plan within 24 hours.
              </p>
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Request a proposal
              </Button>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}

