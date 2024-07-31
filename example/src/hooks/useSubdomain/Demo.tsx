import { useSubdomain } from '../../../..';
import Muted from '@/common/Muted';

export default function Demo() {

    const subdomain = useSubdomain(0);

    return (
        <Muted>
            Your application's sub domain is - <b>{subdomain}</b>
        </Muted>
    )
}
