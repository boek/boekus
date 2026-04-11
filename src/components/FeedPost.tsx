import Link from "next/link";
import type { Post } from "~/lib/content";

export default function FeedPost({ post }: { post: Post }) {
  return (
    <div className="py-8">
      <Link href={`/posts/${post.slug}`} className="group block">
        <p className="mb-2 text-sm text-gray-400">{post.date.toLocaleDateString()}</p>
        <h2 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
          {post.title}
        </h2>
        <p className="text-gray-500">{post.description}</p>
      </Link>
    </div>
  );
}
