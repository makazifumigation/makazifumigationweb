import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/Card';

const formatter = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

export default function BlogCard({ blog }) {
  if (!blog) return null;

  return (
    <Card className="grid gap-4 group hover:shadow-md transition-shadow">
      {blog.image && (
        <div className="relative overflow-hidden rounded-lg aspect-video">
          <Image
            src={blog.image}
            alt={blog.title}
            width={640}
            height={360}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-[#1a1a1a] line-clamp-1 group-hover:text-[#5bad6a] transition-colors">
          {blog.title}
        </h3>
        <p className="text-[#6d6d6d] line-clamp-3">
          {blog.summary}
        </p>
      </div>
      <div className="flex items-center justify-between text-sm pt-2">
        {blog.submittedAt && (
          <span className="text-[#6d6d6d]">
            {formatter.format(blog.submittedAt)}
          </span>
        )}
        <Link
          href={`/blogs/${blog.id}`}
          className="text-[#5bad6a] font-semibold hover:underline"
        >
          Read article →
        </Link>
      </div>
    </Card>
  );
}

