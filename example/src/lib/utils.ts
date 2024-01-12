import { type ClassValue, clsx } from "clsx"
import { lazy } from "react";
import { twMerge } from "tailwind-merge"

export const packageName = 'react-helper-hooks';

export const githubUrl = 'https://github.com/PunitSoniME/react-helper-hooks';
export const exampleMarkDownPrefixUrl = `${githubUrl}/blob/main/src/docs`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const ToggleComponent = lazy(() => import('@/hooks/useToggle'));
const FetchComponent = lazy(() => import('@/hooks/useFetch'));
const IsAppOfflineComponent = lazy(() => import('@/hooks/useIsAppOffline'));
const WindowDimensionsComponent = lazy(() => import('@/hooks/useWindowDimensions'));
const AsyncLoopComponent = lazy(() => import('@/hooks/useAsyncLoop'));
const WindowFocusComponent = lazy(() => import('@/hooks/useWindowFocus'));
const SubdomainComponent = lazy(() => import('@/hooks/useSubdomain'));
const StateJsonComponent = lazy(() => import('@/hooks/useStateJson'));
const ColorBlendComponent = lazy(() => import('@/hooks/useColorBlend'));
const GroupByFirstLetterComponent = lazy(() => import('@/hooks/useGroupByFirstLetter'));
const ScriptComponent = lazy(() => import('@/hooks/useScript'));
const ScrollToTopComponent = lazy(() => import('@/hooks/useScrollToTop'));
const EventListenerComponent = lazy(() => import('@/hooks/useEventListener'));
const GeolocationComponent = lazy(() => import('@/hooks/useGeolocation'));
const CopyToClipboardComponent = lazy(() => import('@/hooks/useCopyToClipboard'));
const TimeoutComponent = lazy(() => import('@/hooks/useTimeout'));
const DebounceComponent = lazy(() => import('@/hooks/useDebounce'));
const UpdateEffectComponent = lazy(() => import('@/hooks/useUpdateEffect'));
const ArrayComponent = lazy(() => import('@/hooks/useArray'));
const PreviousComponent = lazy(() => import('@/hooks/usePrevious'));
const StateWithHistoryComponent = lazy(() => import('@/hooks/useStateWithHistory'));
const StorageComponent = lazy(() => import('@/hooks/useStorage'));
const AsyncComponent = lazy(() => import('@/hooks/useAsync'));
const SpeechComponent = lazy(() => import('@/hooks/useSpeech'));
const ProvidersTreeComponent = lazy(() => import('@/hooks/useProvidersTree'));

export const hooks: Record<string, any> = {
  'useToggle': ToggleComponent,
  'useTimeout': TimeoutComponent,
  'useDebounce': DebounceComponent,
  'useUpdateEffect': UpdateEffectComponent,
  'useArray': ArrayComponent,
  'usePrevious': PreviousComponent,
  'useStateWithHistory': StateWithHistoryComponent,
  'useStorage': StorageComponent,
  'useAsync': AsyncComponent,
  'useFetch': FetchComponent,
  'useScript': ScriptComponent,
  'useEventListener': EventListenerComponent,
  'useIsAppOffline': IsAppOfflineComponent,
  'useWindowDimensions': WindowDimensionsComponent,
  'useGeolocation': GeolocationComponent,
  'useAsyncLoop': AsyncLoopComponent,
  'useWindowFocus': WindowFocusComponent,
  'useSubdomain': SubdomainComponent,
  'useCopyToClipboard': CopyToClipboardComponent,
  'useStateJson': StateJsonComponent,
  'useColorBlend': ColorBlendComponent,
  'useGroupByFirstLetter': GroupByFirstLetterComponent,
  'useScrollToTop': ScrollToTopComponent,
  'useSpeech': SpeechComponent,
  'useProvidersTree': ProvidersTreeComponent
};

export const props = {
  'useTimeout': { defaultTimeout: 15000 }
}

const codeSandboxUrl = 'https://codesandbox.io/s'

export const examleSandboxLinks: Record<string, string> = {
  'useToggle': `${codeSandboxUrl}/usetoggle-927kw`,
  'useTimeout': `${codeSandboxUrl}/usetimeout-fk8g9`,
  'useDebounce': `${codeSandboxUrl}/usedebounce-yuvjt`,
  'useUpdateEffect': `${codeSandboxUrl}/useupdateeffect-iik03`,
  'useArray': `${codeSandboxUrl}/usearray-desdu`,
  'usePrevious': `${codeSandboxUrl}/useprevious-xkc74`,
  'useStateWithHistory': `${codeSandboxUrl}/usestatewithhistory-pgojt`,
  'useStorage': `${codeSandboxUrl}/usestorage-p4dnk`,
  'useAsync': `${codeSandboxUrl}/useasync-en2ms`,
  'useFetch': `${codeSandboxUrl}/usefetch-kduom`,
  'useScript': `${codeSandboxUrl}/usescript-ungdm`,
  'useEventListener': `${codeSandboxUrl}/useeventlistener-l5wy6`,
  'useIsAppOffline': `${codeSandboxUrl}/useisappoffline-uyo9y`,
  'useWindowDimensions': `${codeSandboxUrl}/usewindowdimensions-dyhep`,
  'useGeolocation': `${codeSandboxUrl}/usegeolocation-1tgjf`,
  'useAsyncLoop': `${codeSandboxUrl}/useasyncloop-t53pw`,
  'useWindowFocus': `${codeSandboxUrl}/usewindowfocus-kk282`,
  'useSubdomain': `${codeSandboxUrl}/usesubdomain-rc4n0`,
  'useCopyToClipboard': `${codeSandboxUrl}/usecopytoclipboard-3yqhc`,
  'useStateJson': `${codeSandboxUrl}/usestatejson-u3i0r`,
  'useColorBlend': `${codeSandboxUrl}/usecolorblend-781bv`,
  'useGroupByFirstLetter': `${codeSandboxUrl}/usegroupbyfirstletter-wow78n`,
  'useScrollToTop': `${codeSandboxUrl}/usescrolltotop-g539ex`,
}
