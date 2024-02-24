---
title: Chai Data Providers
description: Chai Data Providers are the fundamental components of the Chai Builder, serving as the core elements for Chai Builder Apps.
---

Chai Data providers are asynchronous functions that return data to Chai Builder. Builder uses this data to bind UI elements and render the pages. This is especially useful when you want to fetch data from an external source like a headless CMS or local file system. Users first need to [register the data provider](/data-provider/registering-data-providers) and then bind the data to the UI elements in the builder. 

> Chai Data Providers are optional. Users can always add static content to pages inside the builder. 

:::tip 
Chai data providers are very similar to `getStaticProps` in Next.js Pages router. They are responsible for fetching data and returning it to the page. 
:::