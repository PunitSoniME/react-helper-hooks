import { type ClassValue, clsx } from "clsx"
import { lazy } from "react";
import { twMerge } from "tailwind-merge"

export const packageName = 'react-helper-hooks';

export const githubUrl = 'https://github.com/PunitSoniME/react-helper-hooks';

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
const ClickOutsideComponent = lazy(() => import('@/hooks/useClickOutside'));
const ColorSchemeComponent = lazy(() => import('@/hooks/useColorScheme'));
const ElementSizeComponent = lazy(() => import('@/hooks/useElementSize'));
const ResizeObserverComponent = lazy(() => import('@/hooks/useResizeObserver'));

export const hooks = [
  { key: 'useToggle', version: '1.0.0', Component: ToggleComponent },
  { key: 'useTimeout', version: '1.0.0', Component: TimeoutComponent },
  { key: 'useDebounce', version: '1.5.0', Component: DebounceComponent },
  { key: 'useUpdateEffect', version: '1.0.0', Component: UpdateEffectComponent },
  { key: 'useArray', version: '1.0.0', Component: ArrayComponent },
  { key: 'usePrevious', version: '1.0.0', Component: PreviousComponent },
  { key: 'useStateWithHistory', version: '1.0.0', Component: StateWithHistoryComponent },
  { key: 'useStorage', version: '1.0.7', Component: StorageComponent },
  { key: 'useAsync', version: '1.1.0', Component: AsyncComponent },
  { key: 'useFetch', version: '1.2.0', Component: FetchComponent },
  { key: 'useScript', version: '1.2.0', Component: ScriptComponent },
  { key: 'useEventListener', version: '1.2.0', Component: EventListenerComponent },
  { key: 'useIsAppOffline', version: '1.2.0', Component: IsAppOfflineComponent },
  { key: 'useWindowDimensions', version: '1.3.0', Component: WindowDimensionsComponent },
  { key: 'useGeolocation', version: '1.5.0', Component: GeolocationComponent },
  { key: 'useAsyncLoop', version: '1.5.0', Component: AsyncLoopComponent },
  { key: 'useWindowFocus', version: '1.5.0', Component: WindowFocusComponent },
  { key: 'useSubdomain', version: '1.5.3', Component: SubdomainComponent },
  { key: 'useCopyToClipboard', version: '1.5.0', Component: CopyToClipboardComponent },
  { key: 'useStateJson', version: '1.5.5', Component: StateJsonComponent },
  { key: 'useColorBlend', version: '1.6.0', Component: ColorBlendComponent },
  { key: 'useGroupByFirstLetter', version: '1.6.0', Component: GroupByFirstLetterComponent },
  { key: 'useScrollToTop', version: '1.7.0', Component: ScrollToTopComponent },
  { key: 'useSpeech', version: '1.10.1', Component: SpeechComponent },
  { key: 'useProvidersTree', version: '1.11.1', Component: ProvidersTreeComponent },
  { key: 'useHash', version: '1.10.1', Component: HashComponent },
  { key: 'useClickOutside', version: '1.12.0', Component: ClickOutsideComponent, isNew: true },
  { key: 'useColorScheme', version: '1.12.0', Component: ColorSchemeComponent, isNew: true },
  { key: 'useElementSize', version: '1.12.0', Component: ElementSizeComponent, isNew: true },
  { key: 'useResizeObserver', version: '1.12.0', Component: ResizeObserverComponent, isNew: true },
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

export const groupByBasedOnKey = (data: any[], key: string) => {
  return data.reduce((acc, curr) => {

    const objectKey = curr[key];

    if (acc[objectKey]) {
      acc[objectKey].push(curr);
    } else {
      acc[objectKey] = [curr]
    }

    return acc;
  }, {});
}