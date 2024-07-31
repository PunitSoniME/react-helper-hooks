import { useProvidersTree } from '../../../..';
import Context1Provider from './Context1';
import Context2Provider from './Context2';
import ContextUsage from './ContextUsage';

export default function Demo() {

    const buildProvidersTree = useProvidersTree();
    const ProvidersTree = buildProvidersTree([
        [Context1Provider],
        [Context2Provider],
    ]);

    return (
        <ProvidersTree>
            <div className='space-y-4'>
                <p>Context Tree</p>
                <ContextUsage />
            </div>
        </ProvidersTree>
    )
}
