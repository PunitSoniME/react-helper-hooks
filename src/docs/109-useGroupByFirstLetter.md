## useGroupByFirstLetter

### A hook that helps you to group by the data by first letter

<br />

> Example

```jsx
import React, { Fragment, useEffect, useState } from 'react'
import { useGroupByFirstLetter } from 'react-helper-hooks';

const data = ["A", "AA", "B", "BB", "C", "CC", "D", "DD"].map((m, index) => {
    return {
        id: index,
        name: `${m} ${index}`
    }
})

export default function ColorBlendComponent() {

    const { groupByFirstLetter } = useGroupByFirstLetter();
    const [groupByData, setGroupByData] = useState([]);

    useEffect(() => {
        setGroupByData(groupByFirstLetter(data, 'name'))
    }, [])

    return (
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
            {
                groupByData.map((d) => (
                    <Fragment key={d.key}>
                        <div>
                            <span style={{ padding: 4, border: "1px solid gray", background: "lightgray" }}>{d.key}</span>
                        </div>

                        <ul style={{ paddingLeft: "1rem" }}>
                            {
                                d.children.map((child, index) => (
                                    <li key={index}>
                                        {child.name}
                                    </li>
                                ))
                            }
                        </ul>

                    </Fragment>
                ))
            }
        </div>
    )
}
```
