export default function LspError({ children }: { children: React.ReactNode }) {
  return (
    <span className="underline decoration-wavy decoration-red-500">
      {children}
    </span>
  );
}
