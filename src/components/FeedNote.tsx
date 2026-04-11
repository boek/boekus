import Link from "next/link";
import type { Element, MDXProps } from "mdx/types";
import type { Note } from "~/lib/content";

export default async function FeedNote({ note }: { note: Note }) {
  const { default: Content } = (await import(
    `~/content/notes/${note.slug}.mdx`
  )) as {
    default: (props: MDXProps) => Element;
  };

  return (
    <div className="mx-auto flex max-w-2xl items-start gap-4 px-4 py-8">
      <div className="prose prose-sm prose-invert prose-headings:text-brand-note-accent prose-headings:font-semibold prose-strong:text-white prose-em:text-brand-note-text/80 prose-a:text-brand-note-accent prose-a:no-underline hover:prose-a:underline prose-code:text-brand-note-accent prose-code:bg-white/5 prose-blockquote:border-brand-note-accent prose-blockquote:text-brand-note-text/70 flex-1 text-brand-note-text">
        <Content />
      </div>
      <Link href={`/notes/${note.slug}`} className="shrink-0 text-sm text-brand-note-accent/60 hover:text-brand-note-accent">
        {note.date.toLocaleDateString()}
      </Link>
    </div>
  );
}
