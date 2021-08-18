import React from 'react'
import {Clock} from "./Clock";

export default {
    title: 'clock',
    component: Clock
}

export const BaseAnalogExample = () => {
    return <Clock mode={'analog'}/>
}

export const BaseDigitalExample = () => {
    return <Clock mode={'digital'}/>
}
