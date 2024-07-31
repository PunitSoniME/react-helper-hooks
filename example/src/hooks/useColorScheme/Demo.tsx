import { useColorScheme } from '../../../..';

export default function Demo() {

    const colorScheme = useColorScheme();

    return (
        <>
            Current color scheme is - <b>{colorScheme}</b>
        </>
    )
}
