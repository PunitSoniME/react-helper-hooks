import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const sessionStorageHook = 'useSessionStorage';
const localStorageHook = 'useLocalStorage';

const info = 'Helps you to handle sessionStorage and localStorage';

const usage: string = `import { ${sessionStorageHook}, ${localStorageHook} } from '${packageName}';

const [property, setProperty, remove] = ${sessionStorageHook}(PROPERTY, VALUE);
const [property, setProperty, remove] = ${localStorageHook}(PROPERTY, VALUE);

/*
    @params
        PROPERTY - string - Pass an object on which you want to do operation
        VALUE - any - Pass the value you want to set it to the property

    @returns
        property - any - Object that stores data
        setProperty - function - Call this function to update data
        remove - function - Call this function to remove data
        
*/`

export default function StorageComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={`${sessionStorageHook}, ${localStorageHook}`}
                info={info}
                usage={usage}
            >
                <Demo />
            </Documentation>

        </Suspense>
    )
}
