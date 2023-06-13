import React from 'react' 
import { useScript } from '../../../.';

export default function ScriptComponent() {
    const { loading, error } = useScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error in loading script</div>
    
    return <div>
        <div>Sum: {(window as any)?._.sum([1, 2, 3])}</div>
        <div>Multiply: {(window as any)?._.multiply(2, 5)}</div>
    </div>
}