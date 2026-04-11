import { getNotes } from "~/lib/content";
import FeedNote from "~/components/FeedNote";
import BackLink from "~/components/BackLink";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const notes = await getNotes();
  const note = notes.find((n) => n.slug === slug);

  if (!note) return <p>Note not found.</p>;

  return (
    <div className="min-h-screen bg-brand-note-bg">
      <BackLink href="/" className="text-brand-note-accent" />
      <FeedNote note={note} />
    </div>
  );
}

export async function generateStaticParams() {
  const notes = await getNotes();
  return notes.map((n) => ({ slug: n.slug }));
}

export const dynamicParams = false;
