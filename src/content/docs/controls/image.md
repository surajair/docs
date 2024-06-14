---
title: Image Control
description: Chai Builder Block Controls
---

`Color` control allow user add numeric value

#### Usage

```js
import { Image, SingleLineText, registerChaiBlock } from "@chaibuilder/blocks";

const YourBlock = ({ image, alt }) => {
    return <Card>
        <img src={image} alt={alt}/>
    </Card>
}

registerChaiBlock(YourBlock, {
    type: 'YourBlock',
    label: 'Your Block',
    category: 'Basic',
    props: {
        alt: SingleLineText({ title: "Alt", default: 'Image' }),
        image: Image({ title: "Image", default: 'https://placehold.it/200' })
    }
})

```


#### Arguments

- `default` - Default value for control.
- `title` - Title of control visible in Chai Builder block settings panel
- `placeholder` - Placeholder text for control
