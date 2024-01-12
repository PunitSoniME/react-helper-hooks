import { lazy, Suspense, Fragment } from 'react';
import { useGroupByFirstLetter } from '../../../..';
import { packageName } from '@/lib/utils';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useGroupByFirstLetter';
const info = 'Group by your data by first letter';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @returns - A function that is used to get the data group by, check below for example
    */
    const { groupByFirstLetter } = ${hook}();
    const groupByData = groupByFirstLetter(DATA, PROPERTY_NAME_TO_GROUP);
}`

const data = ["A", "AA", "B", "BB", "C", "CC", "D", "DD"].map((m, index) => {
    return {
        id: index,
        name: `${m}`
    }
})

export default function GroupByFirstLetterComponent() {

    const { groupByFirstLetter } = useGroupByFirstLetter();
    const groupByData = groupByFirstLetter(data, 'name') as any[];

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
                <Block title='Example'>
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
                </Block>

            </Documentation>

        </Suspense>
    )
}
