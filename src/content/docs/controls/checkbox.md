---
title: Icon Control
description: Chai Builder Block Controls
---

`Icon` control allow user select an icon or add svg code

#### Usage

```js
import { Checkbox, registerChaiBlock } from "@chaibuilder/blocks";

const YourBlock = ({ show }) => {
    return <div>{show ? 'Show' : 'Hide'}</div>
}

registerChaiBlock(YourBlock, {
    type: 'YourBlock',
    label: 'Your Block',
    category: 'Basic',
    props: {
        show: Checkbox({ title: "Show", default: false })
    }
})

```


#### Arguments

- `default` - Default value for control.
- `title` - Title of control visible in Chai Builder block settings panel
- `placeholder` - Placeholder text for control
