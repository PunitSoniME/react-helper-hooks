import { lazy, Suspense } from 'react';
import { useWindowDimensions } from '../../../..';
import { packageName } from '@/lib/utils';
import Muted from '@/common/Muted';
import { CheckCircle } from 'lucide-react';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useWindowDimensions';
const info = `Helps you to get the height, width, dimensions of browser.
You can check either device is mobile or laptop or tablet or desktop or extra large device`

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params
            isMobile - boolean - Returns true if screen width <= 480
            isTablet - boolean - Returns true if screen width >= 481 & width <= 768
            isLaptop - boolean - Returns true if screen width >= 769 & width <= 1024
            isDesktop - boolean - Returns true if screen width >= 1025 & width <= 1200
            isExtraLarge - boolean - Returns true if screen width >= 1201
            height - number - Returns the height of device
            width - number - Returns the width of device
    */
    const { isMobile, isTablet, isLaptop, isDesktop, isExtraLarge, height, width } = ${hook}();
}`

const CurrentScreenSize = ({ text, check }: any) => {
    return <Muted className="flex gap-2 items-center">
        {text} {check ? <CheckCircle color="green" size={18} /> : ""}
    </Muted>
}

export default function WindowDimensionsComponent() {

    const { isMobile, isTablet, isLaptop, isDesktop, isExtraLarge, height, width } = useWindowDimensions();

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

                <Block title='Example'>

                    <div className='flex justify-between flex-col items-start gap-3'>

                        <Muted>Screen Height: {height}</Muted>
                        <Muted>Screen Width: {width}</Muted>

                        <br />

                        <CurrentScreenSize text="Is Mobile ?" check={isMobile} />
                        <CurrentScreenSize text="Is Tablet ?" check={isTablet} />
                        <CurrentScreenSize text="Is Laptop ?" check={isLaptop} />
                        <CurrentScreenSize text="Is Desktop ?" check={isDesktop} />
                        <CurrentScreenSize text="Is Extra Large ?" check={isExtraLarge} />

                    </div>
                </Block>
            </Documentation>

        </Suspense>
    )
}
