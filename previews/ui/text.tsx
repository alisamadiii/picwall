import { UITitle } from "@/components/MDX";
import React from "react";

export default function TextUI() {
  return (
    <div className="space-y-4">
      <UITitle title="text-hero">
        <h1 className="text-hero">Hero</h1>
      </UITitle>
      <UITitle title="text-4xl">
        <h1 className="text-4xl">Headline 1</h1>
      </UITitle>
      <UITitle title="text-3xl">
        <h2 className="text-3xl">Headline 2</h2>
      </UITitle>
      <UITitle title="text-2xl">
        <h3 className="text-2xl">Headline 3</h3>
      </UITitle>
      <UITitle title="text-xl">
        <h4 className="text-xl">Headline 4</h4>
      </UITitle>

      <UITitle title="text-body-large">
        <p className="text-body-large">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          dolores odio. Est, culpa nemo dolore odio consequuntur esse minima
          aperiam et eos ab impedit porro blanditiis quia, ut atque voluptate?
        </p>
      </UITitle>
      <UITitle title="text-body-large-bold">
        <p className="text-body-large-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          dolores odio. Est, culpa nemo dolore odio consequuntur esse minima
          aperiam et eos ab impedit porro blanditiis quia, ut atque voluptate?
        </p>
      </UITitle>

      <UITitle title="text-body-medium">
        <p className="text-body-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          dolores odio. Est, culpa nemo dolore odio consequuntur esse minima
          aperiam et eos ab impedit porro blanditiis quia, ut atque voluptate?
        </p>
      </UITitle>
      <UITitle title="text-body-medium-bold">
        <p className="text-body-medium-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          dolores odio. Est, culpa nemo dolore odio consequuntur esse minima
          aperiam et eos ab impedit porro blanditiis quia, ut atque voluptate?
        </p>
      </UITitle>

      <UITitle title="default">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          dolores odio. Est, culpa nemo dolore odio consequuntur esse minima
          aperiam et eos ab impedit porro blanditiis quia, ut atque voluptate?
        </p>
      </UITitle>
      <UITitle title="default-bold">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          dolores odio. Est, culpa nemo dolore odio consequuntur esse minima
          aperiam et eos ab impedit porro blanditiis quia, ut atque voluptate?
        </p>
      </UITitle>

      <UITitle title="text-xs">
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          dolores odio. Est, culpa nemo dolore odio consequuntur esse minima
          aperiam et eos ab impedit porro blanditiis quia, ut atque voluptate?
        </p>
      </UITitle>
      <UITitle title="text-xs-bold">
        <p className="text-xs-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          dolores odio. Est, culpa nemo dolore odio consequuntur esse minima
          aperiam et eos ab impedit porro blanditiis quia, ut atque voluptate?
        </p>
      </UITitle>
    </div>
  );
}
