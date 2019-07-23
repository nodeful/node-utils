import http from 'axios'

export namespace valid {
  export const email = (email: string) => {
    return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/g.test(email)
  }

  export const userName = (name: string) => {
    return !!name && typeof name === 'string' && name !== '' && /[a-z A-Z]/g.test(name)
  }

  export const organizationName = (name: string) => {
    return !!name && typeof name === 'string' && name !== '' && /[a-z A-Z 0-9]/g.test(name)
  }

  export const domain = (domain: string) => {
    if (typeof domain !== 'string') return false
    const levels = domain.split('.')
    if (levels.length < 2) return false
    return true
  }

  export const reCaptchaResponse = async (secret: string, response: string) => {
    const { data } = await http.post('https://www.google.com/recaptcha/api/siteverify', {
      secret,
      response
    })
    return !!data.success
  }

  export const uuid = (uuid: string) => {
    return /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi.test(uuid)
  }

}
