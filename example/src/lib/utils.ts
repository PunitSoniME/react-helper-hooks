import { type ClassValue, clsx } from "clsx"
import { lazy } from "react";
import { twMerge } from "tailwind-merge"

export const packageName = 'react-helper-hooks';

export const githubUrl = 'https://github.com/PunitSoniME/react-helper-hooks';
export const exampleMarkDownPrefixUrl = `${githubUrl}/blob/main/src/docs`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const ToggleComponent = lazy(() => import('@/hooks/useToggle/ToggleComponent'));
const FetchComponent = lazy(() => import('@/hooks/useFetch/FetchComponent'));
const IsAppOfflineComponent = lazy(() => import('@/hooks/useIsAppOffline/IsAppOfflineComponent'));
const WindowDimensionsComponent = lazy(() => import('@/hooks/useWindowDimensions/WindowDimensionsComponent'));
const AsyncLoopComponent = lazy(() => import('@/hooks/useAsyncLoop/AsyncLoopComponent'));
const WindowFocusComponent = lazy(() => import('@/hooks/useWindowFocus/WindowFocusComponent'));
const SubdomainComponent = lazy(() => import('@/hooks/useSubdomain/SubdomainComponent'));
const StateJsonComponent = lazy(() => import('@/hooks/useStateJson/StateJsonComponent'));
const ColorBlendComponent = lazy(() => import('@/hooks/useColorBlend/ColorBlendComponent'));
const GroupByFirstLetterComponent = lazy(() => import('@/hooks/useGroupByFirstLetter/GroupByFirstLetterComponent'));
const ScriptComponent = lazy(() => import('@/hooks/useScript/ScriptComponent'));
const ScrollToTopComponent = lazy(() => import('@/hooks/useScrollToTop/ScrollToTopComponent'));
const EventListenerComponent = lazy(() => import('@/hooks/useEventListener/EventListenerComponent'));
const GeolocationComponent = lazy(() => import('@/hooks/useGeolocation/GeolocationComponent'));
const CopyToClipboardComponent = lazy(() => import('@/hooks/useCopyToClipboard/CopyToClipboardComponent'));
const TimeoutComponent = lazy(() => import('@/hooks/useTimeout/TimeoutComponent'));
const DebounceComponent = lazy(() => import('@/hooks/useDebounce/DebounceComponent'));
const UpdateEffectComponent = lazy(() => import('@/hooks/useUpdateEffect/UpdateEffectComponent'));
const ArrayComponent = lazy(() => import('@/hooks/useArray/ArrayComponent'));
const PreviousComponent = lazy(() => import('@/hooks/usePrevious/PreviousComponent'));
const StateWithHistoryComponent = lazy(() => import('@/hooks/useStateWithHistory/StateWithHistoryComponent'));
const StorageComponent = lazy(() => import('@/hooks/useStorage/StorageComponent'));
const AsyncComponent = lazy(() => import('@/hooks/useAsync/AsyncComponent'));

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


// export const hooks = {
//   'useToggle': {
//     component: ToggleComponent,
//     description: 'hook is a custom React hook that facilitates toggling between two states.'
//   },
//   'useTimeout': {
//     component: TimeoutComponent,
//     description: 'works just like setTimeout, however we created one single hook which can also do reset and clear timeout',
//     props: { defaultTimeout: 15000 },
//     api: [
//       { execute: 'clear ( function )', description: 'To clear already running timeout' },
//       { execute: 'reset ( function )', description: 'The function to reset the timer again' }
//     ]
//   },
//   'useDebounce': {
//     component: DebounceComponent,
//     description: 'will wait for sometime once user stop typing anything',
//   },
//   'useUpdateEffect': {
//     component: UpdateEffectComponent,
//   },
//   'useArray': {
//     component: ArrayComponent,
//   },
//   'usePrevious': {
//     component: PreviousComponent,
//   },
//   'useStateWithHistory': {
//     component: StateWithHistoryComponent,
//   },
//   'useStorage': {
//     component: StorageComponent,
//   },
//   'useAsync': {
//     component: AsyncComponent,
//   },
//   'useFetch': {
//     component: FetchComponent,
//   },
//   'useScript': {
//     component: ScriptComponent,
//   },
//   'useEventListener': {
//     component: EventListenerComponent,
//   },
//   'useIsAppOffline': {
//     component: IsAppOfflineComponent,
//   },
//   'useWindowDimensions': {
//     component: WindowDimensionsComponent,
//   },
//   'useGeolocation': {
//     component: GeolocationComponent,
//   },
//   'useAsyncLoop': {
//     component: AsyncLoopComponent,
//   },
//   'useWindowFocus': {
//     component: WindowFocusComponent,
//   },
//   'useSubdomain': {
//     component: SubdomainComponent,
//   },
//   'useCopyToClipboard': {
//     component: CopyToClipboardComponent,
//   },
//   'useStateJson': {
//     component: StateJsonComponent,
//   },
//   'useColorBlend': {
//     component: ColorBlendComponent,
//   },
//   'useGroupByFirstLetter': {
//     component: GroupByFirstLetterComponent,
//   },
//   'useScrollToTop': {
//     component: ScrollToTopComponent,
//   },
// }
