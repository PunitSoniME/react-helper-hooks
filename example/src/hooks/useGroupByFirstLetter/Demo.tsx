import { Fragment } from 'react';
import { useGroupByFirstLetter } from '../../../..';

const data = ["A", "AA", "B", "BB", "C", "CC", "D", "DD"].map((m, index) => {
    return {
        id: index,
        name: `${m}`
    }
});

export default function Demo() {

    const { groupByFirstLetter } = useGroupByFirstLetter();
    const groupByData = groupByFirstLetter(data, 'name') as any[];

    return (
        <div className="flex flex-col gap-3 mt-2">

            {
                groupByData.map((d) => (
                    <Fragment key={d.key}>
                        <div>
                            <span className="bg-slate-600 px-2 py-1 text-white rounded-md">{d.key}</span>
                        </div>

                        <ul style={{ paddingLeft: "1rem" }}>
                            {
                                d.children.map((child: any, index: number) => (
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
