import { notes } from "~/lib/content";
import FeedNote from "~/components/FeedNote";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);

  if (!note) return <p>Note not found.</p>;

  return <FeedNote note={note} />;
}

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export const dynamicParams = false;
