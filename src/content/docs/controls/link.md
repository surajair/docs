---
title: Link Control
description: Chai Builder Block Controls
---

`Link` control allow user add a link. It has two properties `href` and `target`. `href` is a string and `target` is a
string or a Chai Builder block.

#### Usage

```js
import { Link, registerChaiBlock } from "@chaibuilder/blocks";

const YourBlock = ({ link }) => {
    return <div>
        <a title="Link" href={link.href} target={link.target}>Open Link</a>
    </div>
}

registerChaiBlock(YourBlock, {
    type: 'YourBlock',
    label: 'Your Block',
    category: 'Basic',
    props: {
        link: Link({
            title: "Link",
            default: { type: "page", target: "_self", href: "" }
        })
    }
})

```


#### Arguments

- `default` - Default value for control.
- `title` - Title of control visible in Chai Builder block settings panel
- `binding` - Binding flag for control. Default value is `true`. If `false` then control will not be visible in binding panel.
