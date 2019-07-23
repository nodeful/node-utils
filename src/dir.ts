import * as fs from 'fs'

export namespace dir {
  export const make = (path) => fs.mkdirSync(path)
}
