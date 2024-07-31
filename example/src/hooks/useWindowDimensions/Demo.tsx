

import { useWindowDimensions } from '../../../..';
import Muted from '@/common/Muted';
import { CheckCircle } from 'lucide-react';

const CurrentScreenSize = ({ text, check }: any) => {
    return <Muted className="flex gap-2 items-center">
        {text} {check ? <CheckCircle color="green" size={18} /> : ""}
    </Muted>
}

export default function Demo() {

    const { isMobile, isTablet, isLaptop, isDesktop, isExtraLarge, height, width } = useWindowDimensions();

    return (
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
    )
}
