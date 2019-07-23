
export namespace boolean {
  export const truthyValue = (value: any) => {
    const truthyValues = ['', true, 'true']
    return truthyValues.includes(value)
  }
}
