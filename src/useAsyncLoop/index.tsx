/**
 * @since 1.5.0
 */
export default function useAsyncLoop() {
  const executeLoop = async (data: any[], func: Function) => {
    await Promise.all(
      data.map(async (d) => {
        await func(d);
      })
    );
  };

  return executeLoop;
}
