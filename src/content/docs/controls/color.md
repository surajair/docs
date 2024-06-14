---
title: Color Control
description: Chai Builder Block Controls
---

`Color` control allow user add numeric value

#### Usage

```js
import { Color, registerChaiBlock } from "@chaibuilder/blocks";
import { Card } from './Card';

const YourBlock = ({ bgColor }) => {
    return <Card color={bgColor} />
}

registerChaiBlock(YourBlock, {
    type: 'YourBlock',
    label: 'Your Block',
    category: 'Basic',
    props: {
        bgColor: Color({ title: "Background Color", default: '#ccc' })
    }
})

```


#### Arguments

- `default` - Default value for control.
- `title` - Title of control visible in Chai Builder block settings panel
