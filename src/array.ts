
export namespace array {

  export const chunk = (array: any[], size: number): any[][] => {
    const { length } = array
    const chunks: any[][] = []

    for (let index = 0; index < length; index += size) {
      const chunk = array.slice(index, index + size)
      chunks.push(chunk)
    }

    return chunks
  }

  export const sum = (array: number[]): number => array.reduce((sum, val) => sum + val, 0)
  export const average = (array: number[]): number => sum(array) / array.filter(val => !isNaN(val)).length

  export const filterUniques = (array: any[]) => [...new Set(array)]
  export const filterUniquesByProperty = <T>(array: T[], prop: keyof T) => {
    return array.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
    })
  }

  export const flat = (array: any[], depth?: number) => {
    depth = depth === undefined ? 1 : Math.floor(depth)
    if (depth < 1) return Array.prototype.slice.call(array)
    let len = array.length >>> 0
    let flattened = []
    let i = 0
    while (i < len) {
      if (i in array) {
        let el = array[i]
        if (Array.isArray(el) && depth > 0) {
          flattened = flattened.concat(flat(el, depth - 1))
        } else flattened.push(el)
      }
      i++
    }
    return flattened
  }
}
