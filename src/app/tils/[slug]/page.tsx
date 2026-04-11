import { getTILs } from "~/lib/content";
import FeedTIL from "~/components/FeedTIL";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tils = await getTILs();
  const til = tils.find((t) => t.slug === slug);

  if (!til) return <p>TIL not found.</p>;

  return (
    <div className="min-h-screen bg-brand-til-bg">
      <FeedTIL til={til} />
    </div>
  );
}

export async function generateStaticParams() {
  const tils = await getTILs();
  return tils.map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;
