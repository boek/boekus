import path from "path";
import { readdirSync } from "fs";

const contentDir = path.join(process.cwd(), "src/content");

export const posts = readdirSync(contentDir + "/posts")
  .filter((f) => f.endsWith(".mdx"))
  .map((f) => ({ slug: f.replace(/\.mdx?$/, "") }));
