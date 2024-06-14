---
title: Single Line Text Control
description: Chai Builder Block Controls
---

`SingleLineText` control allow user add content with single line text input.

#### Usage

```js
import { SingleLineText, registerChaiBlock } from "@chaibuilder/blocks";

const YourBlock = ({ content }) => {
    return <p>{content}</p>
}

registerChaiBlock(YourBlock, {
    type: 'YourBlock',
    label: 'Your Block',
    category: 'Basic',
    props: {
        content: SingleLineText({ title: "Content", default: "Default content" })
    }
})

```


#### Arguments

- `default` - Default value for control.
- `title` - Title of control visible in Chai Builder block settings panel
- `placeholder` - Placeholder text for control
