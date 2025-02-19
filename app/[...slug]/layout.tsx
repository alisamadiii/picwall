import React from "react";
import { allTopDocs } from "contentlayer/generated";

export async function generateStaticParams() {
  return allTopDocs.map((post) => ({
    docs: post.slug.split("/").slice(1),
  }));
}

type Props = {
  children: React.ReactNode;
};

export default function TopDocsLayout({ children }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-4xl px-8 py-24">{children}</div>
  );
}
