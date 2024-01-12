import { lazy, Suspense } from 'react';
import { useSessionStorage, useLocalStorage } from '../../../..';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const sessionStorageHook = 'useSessionStorage';
const localStorageHook = 'useLocalStorage';

const info = 'Help you to handle sessionStorage and localStorage';

const usage: string = `import { ${sessionStorageHook}, ${localStorageHook} } from '${packageName}';

export default function Component() {
    /*
        @params
            PROPERTY - string - Pass an object on which you want to do operation
            VALUE - any - Pass the value you want to set it to the property

        @returns
            property - any - Object that stores data
            setProperty - function - Call this function to update data
            remove - function - Call this function to remove data
            
    */
    const [property, setProperty, remove] = ${sessionStorageHook}(PROPERTY, VALUE);
    const [property, setProperty, remove] = ${localStorageHook}(PROPERTY, VALUE);
}`

export default function StorageComponent() {

    const [name, setName, removeName] = useSessionStorage("name", "Punit");
    const [city, setCity, removeCity] = useLocalStorage("city", "Patan");

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={`${sessionStorageHook}, ${localStorageHook}`}
                info={info}
                usage={usage}
            >

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
                            <p>City: {city}</p>

                            <div className='flex gap-3'>
                                <Button size="sm" onClick={() => setCity("Ahmedabad")}>Set City</Button>
                                <Button size="sm" onClick={removeCity}>Remove City</Button>
                            </div>
                        </div>

                    </div>
                </Block>
            </Documentation>

        </Suspense>
    )
}
