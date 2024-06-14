---
title: List Control
description: Chai Builder Block Controls
---

`List` control allow user add an array of values. Each value can be of any type

#### Usage

```js
import { List, Numeric, registerChaiBlock } from "@chaibuilder/blocks";
import GoogleMaps from "./GoogleMaps";

const YourBlock = ({ markers }) => {
    return <GoogleMaps markers={markers} />
}

registerChaiBlock(YourBlock, {
    type: 'YourBlock',
    label: 'Your Block',
    category: 'Basic',
    props: {
        markers: List({
            title: "Markers",
            default: [{ lat: 36.234, lng: 70.234 }],
            itemProperties: {
                lat: Numeric({ title: "Latitude" }),
                lng: Numeric({ title: "Longitude" })
            }
        })
    }
})

```


#### Arguments

- `default` - Default value for control.
- `title` - Title of control visible in Chai Builder block settings panel
