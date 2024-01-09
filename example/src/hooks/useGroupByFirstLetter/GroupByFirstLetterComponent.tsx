import { useState, lazy, Suspense, Fragment } from 'react';
import { useGroupByFirstLetter } from '../../../../.';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useGroupByFirstLetter';

const data = ["A", "AA", "B", "BB", "C", "CC", "D", "DD"].map((m, index) => {
    return {
        id: index,
        name: `${m}`
    }
})

const api = [
    { execute: 'groupByFirstLetter', type: 'function', description: 'A function which accepts 2 parameters, 1st will be data, 2nd one will be the property name to perform group operation' },
];

export default function GroupByFirstLetterComponent() {

    const { groupByFirstLetter } = useGroupByFirstLetter();
    const groupByData = groupByFirstLetter(data, 'name') as any[];

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> that helps you to group by the data by first letter
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>

                    <div className='flex flex-col'>
                        <code>
                            {`const { groupByFirstLetter } = ${hook}();`}
                        </code>
                        <code>
                            {`const groupByData = groupByFirstLetter(DATA, PROPERTY_NAME_TO_GROUP);`}
                        </code>
                    </div>
                </div>
            </Block>

            <Api api={api} />

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

        </Suspense>
    )
}
