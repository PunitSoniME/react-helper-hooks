import React from 'react';
import { Fragment } from 'react'
import { useGroupByFirstLetter } from '../../../.';

const data = ["A", "AA", "B", "BB", "C", "CC", "D", "DD"].map((m, index) => {
    return {
        id: index,
        name: `${m} ${index}`
    }
})

export default function GroupByFirstLetterComponent() {

    const { groupByFirstLetter } = useGroupByFirstLetter();
    const groupByData = groupByFirstLetter(data, 'name') as any[];

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
