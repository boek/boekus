import Link from "next/link";
import type { Element, MDXProps } from "mdx/types";
import type { TIL } from "~/lib/content";

export default async function FeedTIL({ til }: { til: TIL }) {
  const { default: Content } = (await import(
    `~/content/tils/${til.slug}.mdx`
  )) as {
    default: (props: MDXProps) => Element;
  };

  return (
    <div className="mx-auto flex max-w-2xl items-start gap-4 px-4 py-8">
      <div className="prose prose-sm prose-invert prose-headings:text-brand-til-accent prose-headings:font-semibold prose-strong:text-white prose-em:text-brand-til-text/80 prose-a:text-brand-til-accent prose-a:no-underline hover:prose-a:underline prose-code:text-brand-til-accent prose-code:bg-white/5 prose-blockquote:border-brand-til-accent prose-blockquote:text-brand-til-text/70 flex-1 text-brand-til-text">
        <Content />
      </div>
      <Link href={`/tils/${til.slug}`} className="shrink-0 text-sm text-brand-til-accent/60 hover:text-brand-til-accent">
        {til.date.toLocaleDateString()}
      </Link>
    </div>
  );
}
