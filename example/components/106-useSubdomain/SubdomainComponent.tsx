import React from 'react';
import { useSubdomain } from '../../../.';

export default function SubdomainComponent() {
    const subdomain = useSubdomain(0);

    return (
        <div>
            <span>
                Your application's sub domain is - <b><u>{subdomain}</u></b>
            </span>
        </div>
    )
}