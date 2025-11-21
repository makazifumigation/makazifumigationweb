import PageHero from '@/components/sections/PageHero';
import SectionHeader from '@/components/sections/SectionHeader';
import BlogCard from '@/components/content/BlogCard';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { fetchVisibleBlogs } from '@/lib/firestore';

export const metadata = {
  title: 'Blog',
  description:
    'Makazi Fumigation blog covering pest control trends, compliance tips, and success stories from across Tanzania.',
};

export default async function BlogsPage() {
  let blogs = [];

  try {
    blogs = await fetchVisibleBlogs();
  } catch (error) {
    console.error('Failed to load blogs', error);
  }

  return (
    <>
      <PageHero
        eyebrow="Makazi Insights"
        title="Our practical guidance."
        description="Explore a wide range of articles, guides, and expert insights created specifically for facility managers, QHSE teams, and homeowners. From practical prevention strategies and seasonal pest alerts to deep dives on sanitation standards, compliance expectations, and real-world case studies, our resource hub helps you stay informed, prepared, and confidently ahead of any pest risks in your space."
      >
        <div className="space-y-2 text-sm text-[#6d6d6d]">
          <p>• Compliance checklists for regulated industries</p>
          <p>• Seasonal pest alerts for Tanzanian regions</p>
          <p>• Case studies from on-site operations</p>
        </div>
      </PageHero>

      <section className="section-compact">
        <Container>
          <div className="space-y-12">
            <SectionHeader
              eyebrow="Latest articles"
              title="Expert's advice"
              description="Insights to help you protect assets, staff, and inventory from pest threats."
            />
            {blogs.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              <Card variant="muted" className="text-center text-[#6d6d6d] py-12">
                Articles will appear here once published. Subscribe for updates by
                emailing{' '}
                <a
                  href="mailto:business@makazifumigation.co.tz"
                  className="text-[#5bad6a] font-semibold hover:underline"
                >
                  business@makazifumigation.co.tz
                </a>
                .
              </Card>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}

