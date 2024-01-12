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
const HashComponent = lazy(() => import('@/hooks/useHash'));

export const hooks = [
  { key: 'useToggle', Component: ToggleComponent },
  { key: 'useTimeout', Component: TimeoutComponent },
  { key: 'useDebounce', Component: DebounceComponent },
  { key: 'useUpdateEffect', Component: UpdateEffectComponent },
  { key: 'useArray', Component: ArrayComponent },
  { key: 'usePrevious', Component: PreviousComponent },
  { key: 'useStateWithHistory', Component: StateWithHistoryComponent },
  { key: 'useStorage', Component: StorageComponent },
  { key: 'useAsync', Component: AsyncComponent },
  { key: 'useFetch', Component: FetchComponent },
  { key: 'useScript', Component: ScriptComponent },
  { key: 'useEventListener', Component: EventListenerComponent },
  { key: 'useIsAppOffline', Component: IsAppOfflineComponent },
  { key: 'useWindowDimensions', Component: WindowDimensionsComponent },
  { key: 'useGeolocation', Component: GeolocationComponent },
  { key: 'useAsyncLoop', Component: AsyncLoopComponent },
  { key: 'useWindowFocus', Component: WindowFocusComponent },
  { key: 'useSubdomain', Component: SubdomainComponent },
  { key: 'useCopyToClipboard', Component: CopyToClipboardComponent },
  { key: 'useStateJson', Component: StateJsonComponent },
  { key: 'useColorBlend', Component: ColorBlendComponent },
  { key: 'useGroupByFirstLetter', Component: GroupByFirstLetterComponent },
  { key: 'useScrollToTop', Component: ScrollToTopComponent },
  { key: 'useSpeech', Component: SpeechComponent, isNew: true },
  { key: 'useProvidersTree', Component: ProvidersTreeComponent, isNew: true },
  { key: 'useHash', Component: HashComponent, isNew: true }
];

export const props = {
  'useTimeout': { defaultTimeout: 15000 }
}

export const sortBasedOnString = (data: any[], key: string) => {
  return [...data].sort((a: any, b: any) => {
    const value1 = a[key]?.toLowerCase();
    const value2 = b[key]?.toLowerCase();

    if (value1 < value2) {
      return -1;
    }
    if (value1 > value2) {
      return 1;
    }

    return 0;
  })
}
