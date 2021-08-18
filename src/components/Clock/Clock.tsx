import React, {useEffect, useState} from 'react'
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode: 'digital' | 'analog'
}

export const getZero = (num: number) => {
    return num <= 9 ? '0' + num : num
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])


    let view;
    switch (props.mode){
        case 'analog' :
            view = <AnalogClockView date={date}/>
            break
        case 'digital' :
        default :
            view = <DigitalClockView date={date}/>
    }
    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}
