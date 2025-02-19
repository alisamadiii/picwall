import React from "react";

import { allTopDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/MDX/mdx-contents";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function TopDocsPage({ params }: Props) {
  const { slug } = await params;

  const findingTopDocs = allTopDocs.find(
    (post) => `${slug.join("/")}` === post.slugAsParams
  );

  if (!findingTopDocs) {
    notFound();
  }

  return (
    <div className="w-full">
      <Mdx code={findingTopDocs.body.code} />
    </div>
  );
}
