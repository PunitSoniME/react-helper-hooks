## useWindowDimensions

### This hook will help you to get the height, width, dimensions of browser, You can check either device is mobile or laptop or tablet or desktop or extra large device

<br />

> Example

```jsx
 
import { useWindowDimensions } from 'react-helper-hooks';;

export default function WindowDimensionsComponent() {

    const { isMobile, isTablet, isLaptop, isDesktop, isExtraLarge, height, width } = useWindowDimensions();

    return (
        <div>
            <p>Current Height: {height}</p>
            <p>Current Width: {width}</p>


            <br />
            <p>Is Mobile ?: {isMobile.toString()}</p>
            <p>Is Tablet ?: {isTablet.toString()}</p>
            <p>Is Laptop ?: {isLaptop.toString()}</p>
            <p>Is Desktop ?: {isDesktop.toString()}</p>
            <p>Is Extra Large ?: {isExtraLarge.toString()}</p>
        </div>
    )
}

```
