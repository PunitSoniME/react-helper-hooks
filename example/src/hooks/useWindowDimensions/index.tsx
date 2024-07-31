import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useWindowDimensions';
const info = `Helps you to get the height, width, dimensions of browser.
You can check either device is mobile or laptop or tablet or desktop or extra large device`

const usage: string = `import { ${hook} } from '${packageName}';

const { isMobile, isTablet, isLaptop, isDesktop, isExtraLarge, height, width } = ${hook}();

/*
    @params
        isMobile - boolean - Returns true if screen width <= 480
        isTablet - boolean - Returns true if screen width >= 481 & width <= 768
        isLaptop - boolean - Returns true if screen width >= 769 & width <= 1024
        isDesktop - boolean - Returns true if screen width >= 1025 & width <= 1200
        isExtraLarge - boolean - Returns true if screen width >= 1201
        height - number - Returns the height of device
        width - number - Returns the width of device
*/`

export default function WindowDimensionsComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
                version="1.3.0"
            >
                <Demo />
            </Documentation>

        </Suspense>
    )
}
