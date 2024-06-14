---
title: Single Line Text Control
description: Chai Builder Block Controls
---

`MultiLineText` control allow user add content with multiple line text input.

#### Usage

```js
import { MultiLineText, registerChaiBlock } from "@chaibuilder/blocks";

const YourBlock = ({ content }) => {
    return <p>{content}</p>
}

registerChaiBlock(YourBlock, {
    type: 'YourBlock',
    label: 'Your Block',
    category: 'Basic',
    props: {
        content: MultiLineText({ title: "Content", default: "Default content" })
    }
})

```


#### Arguments

- `default` - Default value for control.
- `title` - Title of control visible in Chai Builder block settings panel
- `placeholder` - Placeholder text for control
