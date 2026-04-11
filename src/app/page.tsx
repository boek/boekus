import Link from "next/link";
import { posts } from "~/lib/content";

export default function HomePage() {
  return (
    <main>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
