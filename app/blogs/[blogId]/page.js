import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import BlogCard from "@/components/content/BlogCard";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { fetchBlogById, fetchVisibleBlogs } from "@/lib/firestore";

const isHtml = (value) =>
  typeof value === "string" && /<\/?[a-z][\s\S]*>/i.test(value);

export async function generateStaticParams() {
  try {
    const blogs = await fetchVisibleBlogs();
    return blogs.map((blog) => ({ blogId: blog.id }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const { blogId } = await params;
    const blog = await fetchBlogById(blogId);

    if (!blog) {
      return {
        title: "Blog not found",
      };
    }

    return {
      title: blog.title,
      description: blog.summary?.slice(0, 150),
      openGraph: {
        title: blog.title,
        description: blog.summary,
        images: blog.image ? [blog.image] : undefined,
      },
    };
  } catch {
    return {
      title: "Makazi Blog",
    };
  }
}

export default async function BlogDetailPage({ params }) {
  const { blogId } = await params;
  const blog = await fetchBlogById(blogId);

  if (!blog) {
    notFound();
  }

  let related = [];

  try {
    related = (await fetchVisibleBlogs(4))
      .filter((item) => item.id !== blog.id)
      .slice(0, 3);
  } catch (error) {
    console.error("Failed to fetch related blogs", error);
  }

  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <PageHero
        eyebrow="Makazi Insights"
        title={blog.title}
        description={blog.summary}
      >
        <div className="space-y-2 text-sm text-[#6d6d6d]">
          {blog.submittedAt && (
            <p>Published: {formatter.format(blog.submittedAt)}</p>
          )}
          <p>Makazi Technical Team</p>
        </div>
      </PageHero>

      {blog.image && (
        <section className="section-compact">
          <Container>
            <div className="relative w-full overflow-hidden rounded-2xl aspect-video shadow-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                width={1280}
                height={720}
                className="object-cover w-full h-full"
              />
            </div>
          </Container>
        </section>
      )}

      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
            <article className="prose prose-lg max-w-none">
              <Card className="p-8">
                {isHtml(blog.body) ? (
                  <div
                    className="text-[#6d6d6d] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: blog.body }}
                  />
                ) : (
                  blog.body
                    ?.split(/\n{2,}/)
                    .filter(Boolean)
                    .map((paragraph, index) => (
                      <p
                        key={`${blog.id}-${index}`}
                        className="text-[#6d6d6d] leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    ))
                )}
              </Card>
            </article>
            <aside>
              <Card variant="muted" className="space-y-6">
                <SectionHeader
                  eyebrow="Next reads"
                  title="Related insights"
                  description="Continue exploring pest control strategies and compliance tips."
                  size="sm"
                />
                {related.length > 0 ? (
                  <div className="space-y-4">
                    {related.map((item) => (
                      <Link
                        key={item.id}
                        href={`/blogs/${item.id}`}
                        className="block rounded-xl border border-[#e7e7e7] bg-white p-4 transition-colors hover:border-[#5bad6a] hover:shadow-sm"
                      >
                        <p className="text-sm font-semibold text-[#1a1a1a] mb-2">
                          {item.title}
                        </p>
                        <p className="text-sm text-[#6d6d6d] line-clamp-2">
                          {item.summary}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-[#6d6d6d]">
                    More articles coming soon.
                  </p>
                )}
                <Button
                  href="/blogs"
                  variant="ghost"
                  size="md"
                  className="w-full"
                >
                  Back to blog
                </Button>
              </Card>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
