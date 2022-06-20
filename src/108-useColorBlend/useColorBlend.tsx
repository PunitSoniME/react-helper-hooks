import React from 'react'

/*
    * rgbA, rebB - Array of integer or string values
    * Values must be between 0 to 255
*/
export default function useColorBlend(rgbA, rgbB) {

    const colorChannelMixer = (colorA, colorB) => {
        const channelA = colorA * 0.5;
        const channelB = colorB * (1 - 0.5);
        return parseInt((channelA + channelB).toString());
    }

    const r = colorChannelMixer(rgbA[0], rgbB[0]);
    const g = colorChannelMixer(rgbA[1], rgbB[1]);
    const b = colorChannelMixer(rgbA[2], rgbB[2]);

    return [r, g, b];
}
