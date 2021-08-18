import React from "react";
import {ClockViewPropsType, getZero} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <div>
        <span>{getZero(date.getHours())}</span> :
        <span>{getZero(date.getMinutes())}</span> :
        <span>{getZero(date.getSeconds())}</span>
    </div>
}