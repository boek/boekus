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
      <div className="flex-1 text-white">
        <Content />
      </div>
      <Link href={`/tils/${til.slug}`} className="shrink-0 text-sm text-green-200 hover:underline">
        {til.date.toLocaleDateString()}
      </Link>
    </div>
  );
}
