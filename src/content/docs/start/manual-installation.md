---
title: Manual Installation
description: Learn how to manually install the ChaiBuilder SDK and Runtime
---

Step 1: Install the packages
```bash
npm install @chaibuilder/sdk @chaibuilder/runtime tailwindcss
```

Step 2: Add a custom tailwind config.
Create a new file: `tailwind.chaibuilder.config.ts`. <br /> Pass the path to your source files.
```tsx
import { chaiBuilderTailwindConfig } from "@chaibuilder/sdk/tailwind";
export default chaiBuilderTailwindConfig(["./src/**/*.{js,ts,jsx,tsx}"]);

```

Step 3: Create a new `chaibuilder.tailwind.css`
```css
@config "./tailwind.chaibuilder.config.ts";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Add the builder to your page.
```tsx
import "./chaibuilder.tailwind.css";
import "@chaibuilder/sdk/styles";
import {ChaiBuilderEditor} from "@chaibuilder/sdk";

const BuilderFullPage = () => {
  return  (
      <ChaiBuilderEditor
          blocks={[]}
          onSavePage={async (blocks) => await saveBlocks(blocks)}
          onSaveBrandingOptions={async (branding) => await saveBranding(branding)}
      />
  );
}
```

Step 5: Render the blocks on your page.
```tsx
export default async () => {
    const styles = await getStylesForBlocks(blocks, brandingOptions);
    return <>
        <style>{styles}</style>
        <RenderChaiBlocks blocks={blocks} />
    </>
}
```
