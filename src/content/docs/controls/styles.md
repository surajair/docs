---
title: Styles Control
description: Chai Builder Block Controls
---

`Styles` control allow user to styling of block.

#### Usage

:::tip[Note]
Styles() prop is received as an object. So you need to spread it on the element.
:::

```js
import { Styles, registerChaiBlock } from "@chaibuilder/blocks";

const YourBlock = ({ styles }) => {
    return (
        <div {...styles}>
            Your Block
        </div>
    )
}

registerChaiBlock(YourBlock, {
    type: 'YourBlock',
    label: 'Your Block',
    category: 'Basic',
    props: {
        styles: Styles({ default: "text-3xl bg-red-500"})
    }
})

```


#### Arguments

- `default` - Default value of styles. User can pass any valid tailwind css class names
