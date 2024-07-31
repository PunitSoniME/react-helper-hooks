import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useSpeech';
const info = 'Helps you implement speeching facility';

const usage: string = `import { ${hook} } from '${packageName}';

const { play, resume, pause, stop, loadSpeech, currentPlayingState } = ${hook}();

/*
    @returns
        loadSpeech - function - This function accepts 2 parameters, 1st one is HTMLElement, 2nd one is string, you can pass anyone of them at a time
        play - function - Call this function to start the speech, before calling this function, make sure you call loadSpeech first
        resume - function - Call this function to resume the speech
        pause - function - Call this function to pause the speech
        stop - function - Call this function to stop the speech
        currentPlayingState - string - Current playing state among these - initialized | playing | paused | ended | resumed
*/`

export default function SpeechComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
                version="1.10.1"
            >
                <Demo />
            </Documentation>

        </Suspense>
    )
}
