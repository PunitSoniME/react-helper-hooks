/**
 * @since 1.6.0
 */
export default function useColorBlend(rgbA: number[], rgbB: number[]) {
  const colorChannelMixer = (colorA: number, colorB: number) => {
    const channelA = colorA * 0.5;
    const channelB = colorB * (1 - 0.5);
    return parseInt((channelA + channelB).toString());
  };

  const r = colorChannelMixer(rgbA[0], rgbB[0]);
  const g = colorChannelMixer(rgbA[1], rgbB[1]);
  const b = colorChannelMixer(rgbA[2], rgbB[2]);

  return [r, g, b];
}
