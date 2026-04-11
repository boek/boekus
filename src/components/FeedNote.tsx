import type { Note } from "~/lib/content";

export default function FeedNote({ note }: { note: Note }) {
  return (
    <div className="py-8">
      <p className="mb-2 text-sm text-gray-400">
        {note.date.toLocaleDateString()}
      </p>
      <p className="text-gray-700">{note.content}</p>
    </div>
  );
}
