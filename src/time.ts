import * as Moment from 'moment'
import * as MomentRange from 'moment-range'

const moment = MomentRange.extendMoment(Moment)

export namespace time {
  export const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
  export const delay = timeout

  export const splitTimestampRangeByDays = (from: string, to: string) => {
    const fromMoment = moment(from)
    const toMoment = moment(to)
    const range = moment.range(fromMoment, toMoment).snapTo('days')
    const days = Array.from(range.by('day'))
    return days.map((day, i) => ({
      from: (i === 0 ? fromMoment : day.startOf('day')).format('x'),
      to: (i === (days.length - 1) ? toMoment : day.endOf('day')).format('x')
    }))
  }

  export const timestampFromThePast = (pastMinutes: number = 0): string => {
    return moment().subtract(pastMinutes, 'minutes').format('x')
  }
}
