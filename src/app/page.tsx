import { all } from "~/lib/content";
import FeedNote from "~/components/FeedNote";
import FeedPost from "~/components/FeedPost";
import Header from "~/components/Header";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <Header />
      <ul className="divide-y divide-gray-200">
        {all.map((item) =>
          item.type === "post" ? (
            <li key={item.slug}>
              <FeedPost post={item} />
            </li>
          ) : (
            <li key={item.slug}>
              <FeedNote note={item} />
            </li>
          ),
        )}
      </ul>
    </main>
  );
}
