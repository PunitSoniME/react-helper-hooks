# react-helper-hooks

> Custom React Helper Hooks to save hours of developers

<br />

[![npm version](https://badge.fury.io/js/react-helper-hooks.svg)][npm_url]
[![license](https://img.shields.io/npm/l/react-helper-hooks.svg)][npm_url]
![Types Included](https://badgen.net/npm/types/react-helper-hooks)

![dependents](https://badgen.net/npm/dependents/react-helper-hooks)
[![weekly downloads](https://badgen.net/npm/dw/react-helper-hooks)][npm_url]
[![weekly downloads](https://badgen.net/npm/dm/react-helper-hooks)][npm_url]
[![downloads](https://img.shields.io/npm/dt/react-helper-hooks.svg)][npm_url]
![jsDelivr](https://badgen.net/jsdelivr/hits/npm/react-helper-hooks)

![Dependency Count](https://badgen.net/bundlephobia/dependency-count/react-helper-hooks)

![minified](https://badgen.net/bundlephobia/min/react-helper-hooks)
![gzip](https://badgen.net/bundlephobia/minzip/react-helper-hooks)


[npm_url]: https://www.npmjs.org/package/react-helper-hooks

## Install

```bash
npm install --save react-helper-hooks

or

yarn add react-helper-hooks
```

## Usage

-----------------------------

- [`useToggle`](./src/docs/1-useToggle.md) &mdash; This hook will help you to handle toggle. [![][img-demo]](https://codesandbox.io/s/usetoggle-927kw)

-----------------------------

- [`useTimeout`](./src/docs/2-useTimeout.md) &mdash; This hook will help you to handle timeout ( just like setTimeout, but with more functionalities ). [![][img-demo]](https://codesandbox.io/s/usetimeout-fk8g9)

-----------------------------

- [`useDebounce`](./src/docs/3-useDebounce.md) &mdash; This hook will help you to handle debounce ( Execute method once user stop typing ). [![][img-demo]](https://codesandbox.io/s/usedebounce-yuvjt)

-----------------------------

- [`useUpdateEffect`](./src/docs/4-useUpdateEffect.md) &mdash; This hook will be used to call method after the value of <code>useUpdateEffect dependencies</code> changed, it will not be called on first render. [![][img-demo]](https://codesandbox.io/s/useupdateeffect-iik03)

-----------------------------

- [`useArray`](./src/docs/5-useArray.md) &mdash; This hook contains many methods of array like push, update, remove, filter, update, clear etc... [![][img-demo]](https://codesandbox.io/s/usearray-desdu)

-----------------------------

- [`usePrevious`](./src/docs/6-usePrevious.md) &mdash; This hook returns the previous value of defined variable [![][img-demo]](https://codesandbox.io/s/useprevious-xkc74)

-----------------------------

- [`useStateWithHistory`](./src/docs/7-useStateWithHistory.md) &mdash; This hook used to maintain history of any data [![][img-demo]](https://codesandbox.io/s/usestatewithhistory-pgojt)

-----------------------------

- [`useStorage`](./src/docs/8-useStorage.md) &mdash; This hook will help you to handle localStorage and sessionStorage [![][img-demo]](https://codesandbox.io/s/usestorage-p4dnk)

-----------------------------

- [`useAsync`](./src/docs/9-useAsync.md) &mdash; This hook will help you to handle async methods [![][img-demo]](https://codesandbox.io/s/useasync-en2ms)

-----------------------------

- [`useFetch`](./src/docs/10-useFetch.md) &mdash; This hook will help you to handle fetch functionalities, which internally uses useAsync hook for async process [![][img-demo]](https://codesandbox.io/s/usefetch-kduom)

-----------------------------

- [`useScript`](./src/docs/11-useScript.md) &mdash; This hook will help you to import external script [![][img-demo]](https://codesandbox.io/s/usefetch-ungdm)

-----------------------------

- [`useEventListener`](./src/docs/13-useEventListener.md) &mdash; This hook will help you to handle eventListener functionalities [![][img-demo]](https://codesandbox.io/s/useeventlistener-l5wy6)

-----------------------------

- [`useGeolocation`](./src/docs/17-useGeolocation.md) &mdash; This hook will help you to get latitude and longitude of user [![][img-demo]](https://codesandbox.io/s/usegeolocation-uyo9y)

-----------------------------

- [`useCopyToClipboard`](./src/docs/18-useCopyToClipboard.md) &mdash; This hook will help you to copy a thing which you want [![][img-demo]](https://codesandbox.io/s/usecopytoclipboard-3yqhc)

-----------------------------

- [`useIsAppOffline`](./src/docs/101-useIsAppOffline.md) &mdash; This hook will help you to know your application is running of active internet or you are offline [![][img-demo]](https://codesandbox.io/s/useisappoffline-1tgjf)

-----------------------------

- [`useWindowDimensions`](./src/docs/102-useWindowDimensions.md) &mdash; This hook will help you to get the height, width, dimensions of browser, You can check either device is mobile or laptop or tablet or desktop or extra large device [![][img-demo]](https://codesandbox.io/s/usewindowdimensions-dyhep)

-----------------------------

- [`useAsyncLoop`](./src/docs/104-useAsyncLoop.md) &mdash; This hook will help you to get the height, width, dimensions of browser, You can check either device is mobile or laptop or tablet or desktop or extra large device [![][img-demo]](https://codesandbox.io/s/useasyncloop-t53pw)

-----------------------------

- [`useWindowFocus`](./src/docs/105-useWindowFocus.md) &mdash; This hook will help you to hide/show the sensitive information. Below example will help you to understand [![][img-demo]](https://codesandbox.io/s/usewindowfocus-kk282)

-----------------------------

- [`useSubdomain`](./src/docs/106-useSubdomain.md) &mdash; This hook will return the subdomain of the application from url [![][img-demo]](https://codesandbox.io/s/usesubdomain-rc4n0)

-----------------------------

- [`useStateJson`](./src/docs/107-useStateJson.md) &mdash; A hook that stores a state as a JSON string to prevent unnecessary render updates. [![][img-demo]](https://codesandbox.io/s/usestatejson-u3i0r)

-----------------------------


- [`useColorBlend`](./src/docs/108-useColorBlend.md) &mdash; A hook that generates blend color by passing 2 array [![][img-demo]](https://codesandbox.io/s/usecolorblend-781bv)

-----------------------------


- [`useGroupByFirstLetter`](./src/docs/109-useGroupByFirstLetter.md) &mdash; A hook that helps you to group by the data by first letter [![][img-demo]](https://codesandbox.io/s/usegroupbyfirstletter-wow78n)

-----------------------------


- [`useScrollToTop`](./src/docs/110-useScrollToTop.md) &mdash; A hook that helps you to scroll to top with smooth transition [![][img-demo]](https://codesandbox.io/s/usescrolltotop-g539ex)

-----------------------------

<br />

### More hooks comming soon

<br />

---------------

### I want to give special thanks to Kyle cook of [Web Dev Simplified](https://twitter.com/DevSimplified) [![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/bukotsunikki.svg?style=social&label=Follow@DevSimplified)](https://twitter.com/DevSimplified)
### I got inspiration from his youtube videos.

<br />

## Follow me on twitter for more updates [![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/bukotsunikki.svg?style=social&label=Follow@PunitSoniME)](https://twitter.com/PunitSoniME)


<br />

## License

MIT © [PunitSoniME](https://github.com/PunitSoniME)

[img-demo]: https://img.shields.io/badge/demo-🚀-blue.svg

---------
