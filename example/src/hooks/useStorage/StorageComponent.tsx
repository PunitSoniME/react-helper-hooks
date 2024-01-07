import { lazy, Suspense, useState, useEffect } from 'react';
import { useSessionStorage, useLocalStorage } from '../../../../.';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Muted from '@/common/Muted';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const sessionStorageHook = 'useSessionStorage';
const localStorageHook = 'useLocalStorage';

const api = [
    { execute: 'property', type: 'any', description: 'Object that stores data' },
    { execute: 'setProperty', type: 'function', description: 'Call this function to update data' },
    { execute: 'remove', type: 'function', description: 'Call this function to remove data' },
];

export default function StorageComponent() {

    const [name, setName, removeName] = useSessionStorage("name", "Punit");
    const [city, setCity, removeCity] = useLocalStorage("city", "Patan");

    return (
        <Suspense fallback={<></>}>

            <Title>{sessionStorageHook}, {localStorageHook}</Title>

            <Lead className='text-md'>
                The <code>{sessionStorageHook}, {localStorageHook}</code> will help you to handle localStorage and sessionStorage
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${sessionStorageHook}, ${localStorageHook} } from "${packageName}";`}
                    </code>

                    <div className='flex flex-col'>
                        <code>
                            {`const [property, setProperty, remove] = ${sessionStorageHook}(PROPERTY, VALUE);`}
                        </code>
                        <code>
                            {`const [property, setProperty, remove] = ${localStorageHook}(PROPERTY, VALUE);`}
                        </code>
                    </div>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>

                <div className='flex justify-between flex-col gap-4 divide-y'>
                    
                    <div className='flex flex-col gap-3'>
                        <h3>Local Storage</h3>
                        <p>Name: {name}</p>

                        <div className='flex gap-3'>
                            <Button size="sm" onClick={() => setName("Soni")}>Set Name</Button>
                            <Button size="sm" onClick={removeName}>Remove Name</Button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 pt-2'>
                        <h3>Session Storage</h3>
                        <p>City:
                             {city}</p>

                        <div className='flex gap-3'>
                            <Button size="sm" onClick={() => setCity("Ahmedabad")}>Set City</Button>
                            <Button size="sm" onClick={removeCity}>Remove City</Button>
                        </div>
                    </div>

                </div>
            </Block>

        </Suspense>
    )
}
