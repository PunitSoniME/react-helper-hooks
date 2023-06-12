import React from 'react'; 
import { useWindowDimensions } from 'react-helper-hooks';

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
