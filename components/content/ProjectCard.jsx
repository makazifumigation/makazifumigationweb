import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <Card className="grid gap-4 group hover:shadow-md transition-shadow">
      {project.image && (
        <div className="relative overflow-hidden rounded-lg aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            width={640}
            height={420}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-[#1a1a1a] line-clamp-1">
          {project.title}
        </h3>
        <p className="text-[#6d6d6d] line-clamp-3">
          {project.description}
        </p>
      </div>
      <div className="flex items-center justify-end gap-3 pt-2">
        {project.destination ? (
          <Button
            href={project.destination}
            variant="ghost"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Post
          </Button>
        ) : (
          <span className="text-sm text-[#6d6d6d] opacity-60">
            Project Review
          </span>
        )}
      </div>
    </Card>
  );
}

