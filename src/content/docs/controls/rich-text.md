---
title: Rich Text Control
description: Chai Builder Block Controls
---

`RichText` control allow user add WYSIWYG editor to Chai Builder block settings panel.

#### Usage

```js
import { RichText, registerChaiBlock } from "@chaibuilder/blocks";

const YourBlock = ({ content }) => {
    return <div dangerouslySetInnerHTML={{ __html: content }} />
}

registerChaiBlock(YourBlock, {
    type: 'YourBlock',
    label: 'Your Block',
    category: 'Basic',
    props: {
        content: RichText({ title: "Content", default: "<p>Default content</p><h1>Heading</h1>" })
    }
})

```


#### Arguments

- `default` - Default value for control.
- `title` - Title of control visible in Chai Builder block settings panel
- `placeholder` - Placeholder text for control
