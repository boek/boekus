import type { Element, MDXProps } from "mdx/types";
import { getPosts } from "~/lib/content";
import BackLink from "~/components/BackLink";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = (await import(`~/content/posts/${slug}.mdx`)) as {
    default: (props: MDXProps) => Element;
  };

  return (
    <div className="min-h-screen bg-brand-post-bg">
      <BackLink href="/" className="text-brand-post-accent" />
      <div className="mx-auto max-w-2xl px-4 py-12">
        <article className="prose prose-invert prose-headings:text-brand-post-accent prose-headings:font-semibold prose-strong:text-white prose-em:text-brand-post-text/80 prose-a:text-brand-post-accent prose-a:no-underline hover:prose-a:underline prose-code:text-brand-post-accent prose-code:bg-white/5 prose-blockquote:border-brand-post-accent prose-blockquote:text-brand-post-text/70 text-brand-post-text">
          <Post />
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
