import * as fs from 'fs'
import * as path from 'path'

export namespace file {
  export const nameMatchesExtension = (fileName: string, ext: string): boolean => {
    ext = formatExt(ext)
    return fileName.toLowerCase().slice(-ext.length) === ext.toLowerCase()
  }

  export const find = (basePath, opts?: { ext?: string, recursive?: boolean }, prevResults?: string[]): string[] => {
    const files = fs.readdirSync(basePath)
    let results = prevResults || []
    for (const file of files) {
      const newPath = path.join(basePath, file)
      if (fs.statSync(newPath).isDirectory() && opts && opts.recursive) {
        results = find(newPath, opts, results)
      } else {
        if (opts && opts.ext && !nameMatchesExtension(newPath, opts.ext)) {
          continue
        }
        results.push(newPath)
      }
    }
    return results
  }

  export const formatExt = (ext: string): string => {
    return ext[0] === '.' ? ext : `.${ext}`
  }
}
