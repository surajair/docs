---
title: Slot Control
description: Chai Builder Block Controls
---

`Slot` control is a special control that allows to render other blocks inside it. It is useful when you want to create a block that can contain other blocks inside it.
For example, `Accordion` block can contain `AccordionItem` blocks inside it. `Slot` control is also used to create `Layout` block.

#### Usage

```js
import { Slot, registerChaiBlock } from "@chaibuilder/blocks";

const YourBlock = ({ accordionContent, accordionTitle }) => {
    return <Accordion>
        <AccordionTitle title="Item 1">
           {accordionTitle}
        </AccordionTitle>
        <AccordionContent>
            {accordionContent}
        </AccordionContent>
    </Accordion>
}

registerChaiBlock(YourBlock, {
    type: 'YourBlock',
    label: 'Your Block',
    category: 'Basic',
    props: {
        accordionTitle: Slot({ name: 'Accordion Title'}),
        accordionContent: Slot({name: 'Accordion Content'})
    }
})

```


#### Arguments

- `name` - name of the slot. It is used to identify the slot when rendering the block. It is also used to display the slot name in the Chai Builder UI.