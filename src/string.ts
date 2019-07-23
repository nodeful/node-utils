
export namespace string {
  export const dasherize = (str: string) => {
    return str.toLowerCase().split(' ').join('-')
  }
}
