import { useScript } from '../../../..';
import Muted from '@/common/Muted';

export default function Demo() {

    const { loading, error } = useScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error in loading script</div>

    return (
        <>
            <Muted>
                In this example we are using lodash's external url - <code>https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js</code>
            </Muted>

            <div className="flex flex-col gap-4 my-2">

                <div className="text-sm">
                    <code>
                        (window)._.sum([1, 2, 3]) - {(window as any)?._.sum([1, 2, 3])}
                    </code>
                </div>

                <div className="text-sm">
                    <code>
                        (window)._.multiply(2, 5) - {(window as any)?._.multiply(2, 5)}
                    </code>
                </div>

            </div>
        </>
    )
}
