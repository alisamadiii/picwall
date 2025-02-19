import dynamic from "next/dynamic";

export const PREVIEWS: Record<
  string,
  { name: string; component: any; code: string }
> = {
  "ui-blocks-buy-products": {
    name: "products",
    component: dynamic(() => import("@/previews/ui/blocks/buy-products"), {
      ssr: false,
    }),
    code: `import React from "react";

type Props = {};

export default function BuyProducts({}: Props) {
  return <div>BuyProducts</div>;
}
`,
  },
  "ui-blocks-pricing": {
    name: "pricing",
    component: dynamic(() => import("@/previews/ui/blocks/pricing"), {
      ssr: false,
    }),
    code: `import Pricing from "@/components/landing-page/pricing";
import React from "react";

type Props = {};

export default function PricingUI({}: Props) {
  return (
    <div>
      <Pricing />
    </div>
  );
}
`,
  },
  "ui-button": {
    name: "button",
    component: dynamic(() => import("@/previews/ui/button"), {
      ssr: false,
    }),
    code: `import React from "react";

import { UITitle } from "@/components/MDX";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export default function ButtonUI() {
  return (
    <div className="space-y-4">
      <UITitle title="default" className="flex items-center gap-4">
        <Button size="xs">Click me</Button>
        <Button size="sm">Click me</Button>
        <Button>Click me</Button>
        <Button size="lg">Click me</Button>
        <Button size="icon">
          <User />
        </Button>
      </UITitle>
      <UITitle title="primary" className="flex items-center gap-4">
        <Button size="xs" variant={"primary"}>
          Click me
        </Button>
        <Button size="sm" variant={"primary"}>
          Click me
        </Button>
        <Button variant={"primary"}>Click me</Button>
        <Button size="lg" variant={"primary"}>
          Click me
        </Button>
        <Button size="icon" variant={"primary"}>
          <User />
        </Button>
      </UITitle>
      <UITitle title="destructive" className="flex items-center gap-4">
        <Button size="xs" variant={"destructive"}>
          Click me
        </Button>
        <Button size="sm" variant={"destructive"}>
          Click me
        </Button>
        <Button variant={"destructive"}>Click me</Button>
        <Button size="lg" variant={"destructive"}>
          Click me
        </Button>
        <Button size="icon" variant={"destructive"}>
          <User />
        </Button>
      </UITitle>
      <UITitle title="outline" className="flex items-center gap-4">
        <Button size="xs" variant={"outline"}>
          Click me
        </Button>
        <Button size="sm" variant={"outline"}>
          Click me
        </Button>
        <Button variant={"outline"}>Click me</Button>
        <Button size="lg" variant={"outline"}>
          Click me
        </Button>
        <Button size="icon" variant={"outline"}>
          <User />
        </Button>
      </UITitle>
      <UITitle title="ghost" className="flex items-center gap-4">
        <Button size="xs" variant={"ghost"}>
          Click me
        </Button>
        <Button size="sm" variant={"ghost"}>
          Click me
        </Button>
        <Button variant={"ghost"}>Click me</Button>
        <Button size="lg" variant={"ghost"}>
          Click me
        </Button>
        <Button size="icon" variant={"ghost"}>
          <User />
        </Button>
      </UITitle>
      <UITitle title="link" className="flex items-center gap-4">
        <Button size="xs" variant={"link"}>
          Click me
        </Button>
        <Button size="sm" variant={"link"}>
          Click me
        </Button>
        <Button variant={"link"}>Click me</Button>
        <Button size="lg" variant={"link"}>
          Click me
        </Button>
        <Button size="icon" variant={"link"}>
          <User />
        </Button>
      </UITitle>
    </div>
  );
}
`,
  },
  "ui-checkbox": {
    name: "checkbox",
    component: dynamic(() => import("@/previews/ui/checkbox"), {
      ssr: false,
    }),
    code: `import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxUI() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
      <Checkbox defaultChecked disabled />
    </div>
  );
}
`,
  },
  "ui-colors": {
    name: "colors",
    component: dynamic(() => import("@/previews/ui/colors"), {
      ssr: false,
    }),
    code: `export default function ColorsUI() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="bg-primary size-20"></div>
      <div className="bg-primary-dark size-20"></div>
      <div className="bg-dark size-20"></div>
      <div className="bg-gray-dark size-20"></div>
      <div className="bg-gray size-20"></div>
      <div className="bg-gray-light size-20"></div>
      <div className="bg-light size-20"></div>
      <div className="bg-destructive size-20"></div>
    </div>
  );
}
`,
  },
  "ui-input": {
    name: "input",
    component: dynamic(() => import("@/previews/ui/input"), {
      ssr: false,
    }),
    code: `import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function InputUI() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Label htmlFor="input">Input</Label>
        <Input id="input" placeholder="You can type here..." />
      </div>
      <div>
        <Label htmlFor="textarea">Textarea</Label>
        <Textarea id="textarea" placeholder="You can type here..." />
      </div>
    </div>
  );
}
`,
  },
  "ui-radio": {
    name: "radio",
    component: dynamic(() => import("@/previews/ui/radio"), {
      ssr: false,
    }),
    code: `import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioUI() {
  return (
    <div className="flex flex-col gap-4">
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one" className="mb-0">
            Option One
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two" className="mb-0">
            Option Two
          </Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="option-two">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-one" id="option-one" disabled />
          <Label htmlFor="option-one" className="mb-0">
            Option One
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-two" id="option-two" disabled />
          <Label htmlFor="option-two" className="mb-0">
            Option Two
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
`,
  },
  "ui-shadows": {
    name: "shadows",
    component: dynamic(() => import("@/previews/ui/shadows"), {
      ssr: false,
    }),
    code: `import React from "react";

export default function Shadows() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="bg-light size-48 rounded-xl shadow-sm dark:border"></div>
      <div className="bg-light size-48 rounded-xl shadow-md dark:border"></div>
      <div className="bg-light size-48 rounded-xl shadow-lg dark:border"></div>
      <div className="bg-light size-48 rounded-xl shadow-xl dark:border"></div>
    </div>
  );
}
`,
  },
  "ui-switch": {
    name: "switch",
    component: dynamic(() => import("@/previews/ui/switch"), {
      ssr: false,
    }),
    code: `import { Switch } from "@/components/ui/switch";
import React from "react";

type Props = {};

export default function SwitchUI({}: Props) {
  return (
    <div className="flex gap-4">
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
      <Switch disabled defaultChecked />
    </div>
  );
}
`,
  },
  "ui-text": {
    name: "text",
    component: dynamic(() => import("@/previews/ui/text"), {
      ssr: false,
    }),
    code: `import { UITitle } from "@/components/MDX";
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
`,
  },
};
