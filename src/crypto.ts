import { createCipher, createDecipher, createHmac, createHash } from 'crypto'

export namespace crypto {
  export const hashPasswordWithSalt = (password: string, salt: string): string => {
    return createHmac('sha512', salt).update(`${salt}#${password}#${salt}`).digest('base64')
  }

  export const hashString = (str: string): string => {
    return createHash('sha1').update(str).digest('base64')
  }

  export const encrypt = (text: string, key: string): string => {
    const cypher = createCipher('aes256', key)
    return cypher.update(text, 'utf8', 'base64') + cypher.final('base64')
  }

  export const decrypt = (ciphertext: string, key: string): string => {
    const cypher = createDecipher('aes256', key)
    return cypher.update(ciphertext, 'base64', 'utf8') + cypher.final('utf8')
  }
}
