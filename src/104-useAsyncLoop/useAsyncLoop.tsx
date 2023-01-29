export default function useAsyncLoop() {
  const executeLoop = async (data, func) => {
    await Promise.all(
      data.map(async (d) => {
        await func(d)
      })
    )
  }

  return executeLoop
}
