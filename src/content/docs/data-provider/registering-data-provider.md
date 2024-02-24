---
title: Registering a data provider
description: Deploy Chai Builder Apps
---


To register a block with the Chai Data Provider, follow these steps.


```typescript
import { registerChaiDataProvider } from "@chaibuilder/blocks";

registerChaiDataProvider("hero_content", {
  name: "Hero Content",
  description: "Homage page hero section content",
  // Used at build time. Required
  dataFn: async (_args: Record<string, any>, currentUrl: string) => {
    await fetch("https://external-api.com/api")
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  },
  // used inside builder mode. This is optional
  mockFn: async (_args: Record<string, any>) => ({
    heading: "Welcome to Chai Builder 🚀",
    description:
      "Chai Builder is a tool to build chai tests. It is built on top of Chai and Chai Builder Blocks.",
  })
});


```

#### Arguments

- `Unique name - string` - The unique name of the data provider. This is used to identify the data provider in the Chai Builder App.
- `Options - object`
  - `name - string` - The readable name of the data provider
  - `description - string` - The description of the data provider
  - `dataFn - function` - The function that returns the data. This is used at build time. User can fetch data from any external source and return it.
  - `mockFn - function` - The function that returns the mock data. This is used in the builder mode. THis is useful to avoid making external API calls in builder mode.