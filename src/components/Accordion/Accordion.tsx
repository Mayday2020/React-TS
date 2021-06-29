import React from "react";

type ItemsType = {
    title: string
    value: number
}
export type AccordionPropsType = {
    collapsed: boolean
    onChange: ()=> void
    onClick: ()=> void
    titleValue: string
    items: ItemsType[]
}
type AccordionTitlePropsType = {
    onChange: ()=> void
}
export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering...')
    return (
        <div>
            <AccordionTitle onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items}/>}
            {console.log(props.collapsed)}
            <hr/>
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onChange}>--- Menu ---</h3>
        </div>
    )
}
type AccordionBodyType = {
    items: ItemsType[]
}
function AccordionBody (props: AccordionBodyType) {
    return (
        <div>
            <ul>
                {props.items.map(item => <li>{item.title}</li>)}
            </ul>
        </div>
    )
}

