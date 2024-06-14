---
title: Numeric Control
description: Chai Builder Block Controls
---

`Numeric` control allow user add numeric value

#### Usage

```js
import { Numeric, registerChaiBlock } from "@chaibuilder/blocks";

const YourBlock = ({ noOfRows }) => {
    return <textarea rows={noOfRows} />
}

registerChaiBlock(YourBlock, {
    type: 'YourBlock',
    label: 'Your Block',
    category: 'Basic',
    props: {
        noOfRows: Numeric({ title: "No of rows", default: 10 })
    }
})

```


#### Arguments

- `default` - Default value for control.
- `title` - Title of control visible in Chai Builder block settings panel
- `placeholder` - Placeholder text for control
