import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0 && true}/>
            <Star selected={props.value > 1 && true}/>
            <Star selected={props.value > 2 && true}/>
            <Star selected={props.value > 3 && true}/>
            <Star selected={props.value > 4 && true}/>
        </div>
    )
}
type StarPropsType = {
    selected: boolean
}
const Star = (props: StarPropsType) => props.selected ? <span><b>Star </b></span> : <span>Star </span>