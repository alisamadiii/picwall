import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  headings: {
    type: "list",
    of: { type: "string" },
    resolve: (doc) => {
      const content = doc.body.raw;

      const headingMatches = [];
      const lines = content.split("\n");
      let inCodeBlock = false;

      // Simple slugify function
      const slugify = (text) => {
        return text
          .toLowerCase()
          .trim()
          .replace(/[\s+]/g, "-")
          .replace(/[^\w\-]+/g, "");
      };

      lines.forEach((line) => {
        if (line.trim().startsWith("```")) {
          inCodeBlock = !inCodeBlock;
        }

        if (!inCodeBlock) {
          const match = line.match(/^(#{1,3})\s(.+)$/);
          if (match) {
            const [_, hashes, text] = match;
            const id = slugify(text);
            headingMatches.push({
              level: hashes.length,
              text,
              id,
            });
          }
        }
      });

      return headingMatches;
    },
  },
};

const TopDocs = defineDocumentType(() => ({
  name: "TopDocs",
  filePathPattern: "top-docs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

const UI = defineDocumentType(() => ({
  name: "UI",
  filePathPattern: "ui/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./contents",
  documentTypes: [TopDocs, UI],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: { light: "github-light-default", dark: "github-dark-dimmed" },
          keepBackground: false,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          content: (node) => node.children,
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
