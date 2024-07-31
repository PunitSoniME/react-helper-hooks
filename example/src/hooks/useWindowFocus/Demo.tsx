

import { useWindowFocus } from '../../../..';
import Muted from '@/common/Muted';

export default function Demo() {

    const windowFocus = useWindowFocus();

    return (
        <div className='flex justify-between flex-col items-start gap-3'>

            <Muted>Things will be visible if your focus is in the application</Muted>
            <Muted>Sensitive information is <span className={`font-semibold ${windowFocus ? "text-green-600" : "text-red-600"}`}>{windowFocus ? 'VISIBLE' : 'HIDDEN'}</span></Muted>

        </div>
    )
}
