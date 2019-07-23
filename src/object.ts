
export namespace object {

  export const getParamFromKeyChain = (obj: any, keyChain: string[]): any => {
    let param = null
    if (Array.isArray(keyChain)) {
      for (const key of keyChain) {
        param = param[key]
      }
    } else if (typeof keyChain === 'string') {
      param = obj[keyChain]
    }
    return param
  }

  export const sort = (obj: any): any => {
    const sorted = {}
    Object.keys(obj).sort().forEach(key => {
      let value = obj[key]
      if (value) {
        if (Array.isArray(value)) {
          value = value.sort()
        } else if (typeof value === 'object') {
          value = sort(value)
        }
      }
      sorted[key] = value
    })
    return sorted
  }

  export const clone = (json: any): any => {
    return JSON.parse(JSON.stringify(json))
  }

}
