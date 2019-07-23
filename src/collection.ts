import { object } from './object'

export namespace collection {
  export const weightedAverage = (collection: any[], avgKeyChain: string[], weightKeyChain: string[]): number => {
    const sum = collection.reduce((sum, obj) => {
      return sum + object.getParamFromKeyChain(obj, avgKeyChain) * object.getParamFromKeyChain(obj, weightKeyChain)
    }, 0)
    const total = collection.reduce((sum, obj) => sum + object.getParamFromKeyChain(obj, weightKeyChain), 0)
    return sum / total
  }

  export const sort = (collection: any[], param: string): any[] => collection.sort((a, b) => a[param] > b[param] ? 1 : -1)
}
