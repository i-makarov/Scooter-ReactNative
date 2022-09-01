import { ADD_CHECK } from "../types"

import moment from 'moment';

export const addCheck = item => {
    const currentTime = moment().format('hh:mm:ss')
    const summ =  moment.utc(moment.duration(currentTime) - moment.duration(item.date.time)).format('mm') * item.price
    const time = moment.utc(moment.duration(currentTime) - moment.duration(item.date.time)).format('HH:mm')
    const check = {
        id: Date.now().toString(),
        place: item,
        summ: summ,
        bonnus: summ*0.1,
        time_end: currentTime,
        all_time: time,
    }
    return {
        type: ADD_CHECK,
        payload: check
    }
}