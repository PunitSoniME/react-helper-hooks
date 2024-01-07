import { lazy, Suspense } from 'react';
import { useWindowDimensions } from '../../../../.';
import { packageName } from '@/lib/utils';
import Muted from '@/common/Muted';
import { CheckCircle } from 'lucide-react';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useWindowDimensions';

const api = [
    { execute: 'isMobile', type: 'boolean', description: 'Returns true if screen width <= 480' },
    { execute: 'isTablet', type: 'boolean', description: 'Returns true if screen width >= 481 & width <= 768' },
    { execute: 'isLaptop', type: 'boolean', description: 'Returns true if screen width >= 769 & width <= 1024' },
    { execute: 'isDesktop', type: 'boolean', description: 'Returns true if screen width >= 1025 & width <= 1200' },
    { execute: 'isExtraLarge', type: 'boolean', description: 'Returns true if screen width >= 1201' },
    { execute: 'height', type: 'number', description: 'Returns the height of device' },
    { execute: 'width', type: 'number', description: 'Returns the width of device' },
];

const CurrentScreenSize = ({ text, check }: any) => {
    return <Muted className="flex gap-2 items-center">
        {text} {check ? <CheckCircle color="green" size={18} /> : ""}
    </Muted>
}

export default function WindowDimensionsComponent() {

    const { isMobile, isTablet, isLaptop, isDesktop, isExtraLarge, height, width } = useWindowDimensions();


    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> will help you to get the height, width, dimensions of browser.<br />
                You can check either device is mobile or laptop or tablet or desktop or extra large device
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>

                    <code>
                        {`const { isMobile, isTablet, isLaptop, isDesktop, isExtraLarge, height, width } = ${hook}();`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>

                <div className='flex justify-between flex-col items-start gap-3'>

                    <Muted>Current Height: {height}</Muted>
                    <Muted>Current Width: {width}</Muted>

                    <br />

                    <CurrentScreenSize text="Is Mobile ?" check={isMobile} />
                    <CurrentScreenSize text="Is Tablet ?" check={isTablet} />
                    <CurrentScreenSize text="Is Laptop ?" check={isLaptop} />
                    <CurrentScreenSize text="Is Desktop ?" check={isDesktop} />
                    <CurrentScreenSize text="Is Extra Large ?" check={isExtraLarge} />

                </div>
            </Block>

        </Suspense>
    )
}
