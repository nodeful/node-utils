
export namespace number {
  export const isNaNOrInfinity = (num: number) => {
    return (isNaN(num) || !isFinite(num))
  }
}
