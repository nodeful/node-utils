import * as generateShortID from 'nanoid/generate'

export namespace random {

  export const integerFromRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  export const valueFromArray = (array: any[], weights?: number[]): any => {
    if (Array.isArray(weights)) {
      weights = weights.map(weight => {
        if (weight < 0 || weight > 1) throw new Error('Invalid weight, must be a float')
        return Math.round(weight * 100)
      })

      const totalWeight = weights.reduce((a, b) => (a + b), 0)

      let weightedElements = []
      array.forEach((element, index) => {
        const elements = []
        for (let i = 0; i < weights[index]; i++) {
          elements.push(element)
        }
        weightedElements = [...weightedElements, ...elements]
      })

      let rnd = Math.floor(Math.random() * totalWeight)
      return weightedElements[rnd]
    }
    const randomIndex = integerFromRange(0, array.length - 1)
    return array[randomIndex]
  }

  export const shortUUID = () => {
    return generateRandomString(11)
  }

  export const generateRandomString = (length = 16) => {
    return generateShortID('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', length)
  }
}
