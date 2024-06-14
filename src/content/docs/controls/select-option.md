---
title: Select Option Control
description: Chai Builder Block Controls
---

`SelectOption` control allow user to select one of the options from the list.

#### Usage

```js
import { SelectOption, registerChaiBlock } from "@chaibuilder/blocks";

const YourBlock = ({ inputType }) => {
    return <input type={inputType} />
}

registerChaiBlock(YourBlock, {
    type: 'YourBlock',
    label: 'Your Block',
    category: 'Basic',
    props: {
        inputType: SelectOption({
            title: 'Input Type',
            options: [
                { value: 'text', label: 'Text' },
                { value: 'number', label: 'Number' },
                { value: 'email', label: 'Email' },
                { value: 'password', label: 'Password' },
            ],
            default: 'text'
        })
    }
})

```


#### Arguments

- `default` - Default value for control.
- `title` - Title of control visible in Chai Builder block settings panel
- `options` - Array of options. Each option should have `value` and `label` property.
