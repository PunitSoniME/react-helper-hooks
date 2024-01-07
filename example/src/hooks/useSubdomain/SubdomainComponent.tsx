import { lazy, Suspense, useState, useEffect } from 'react';
import { useSubdomain } from '../../../../.';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Muted from '@/common/Muted';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useSubdomain';

const api = [
    { execute: 'subdomain', type: 'string', description: 'Will return the subdomain' },
];

export default function SubdomainComponent() {

    const subdomain = useSubdomain(0);

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> will return the subdomain of the application from url
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>

                    <code>
                        {`const subdomain = ${hook}();`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>

                <Muted>
                    Your application's sub domain is - <b>{subdomain}</b>
                </Muted>

            </Block>

        </Suspense>
    )
}

