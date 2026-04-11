import type { MDXComponents } from "mdx/types";
import LspError from "~/components/LspError";

const components: MDXComponents = {
  LspError,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
