import { Request, Response } from 'express'
import * as geoip from 'geoip-lite'

export namespace http {
  export const resError = (res: Response, error: string = 'Some error occured. Please try again later.', code: number = 500) => {
    res.status(code).json({ error: error })
  }

  export const getIPFromRequest = (req: Request): string => {
    const ip = req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      (req.socket ? req.socket.remoteAddress : null)
    return typeof ip === 'string' ? ip.split(',')[0] : ip[0]
  }

  export const getCountryCodeFromIP = (ip: string): string => {
    const resp = geoip.lookup(ip)
    if (!resp) return null
    const cc = resp.country
    if (!cc || cc.length !== 2) return
    return cc
  }

  export const getCountryCodeFromRequest = (req: Request): string => {
    let countryCode = req.get('CF-IPCountry')
    if (!countryCode) countryCode = getCountryCodeFromIP(getIPFromRequest(req))
    return countryCode
  }

  export const getDomainFromUrl = (url: string): string => {
    url = typeof url === 'string' ? url : ''
    url = url
      .toLowerCase()
      .replace('https://', '')
      .replace('http://', '')
      .replace('//', '')
      .split('/')[0] // strip the path after the domain itself
    if (url.indexOf('www.') === 0) url = url.replace('www.', '') // will only replace the first instance of www.
    return url
  }
}
