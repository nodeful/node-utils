
export namespace json {
  export const fromBuffer = (buffer: Buffer): any => {
    return JSON.parse(buffer.toString())
  }
}
