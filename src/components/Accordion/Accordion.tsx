import React from "react";

type ItemsType = {
    id: string
    title: string
    value: any
}
export type AccordionPropsType = {
    collapsed: boolean
    onChange: ()=> void
    onClick: (value: any)=> void
    titleValue: string
    items: ItemsType[]
}
type AccordionTitlePropsType = {
    onChange: ()=> void
    titleValue: string
}
type AccordionBodyType = {
    items: ItemsType[]
    onClick: (value: any)=>void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering...')
    return (
        <div>
            <AccordionTitle titleValue={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
            <hr/>
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onChange}>--- {props.titleValue} ---</h3>
        </div>
    )
}

function AccordionBody (props: AccordionBodyType) {
    return (
        <div>
            <ul>
                {props.items.map((item, index) => {
                    return <li onClick={() => {props.onClick(item.value)}}
                        key={index}>{item.title}</li>
                })}
            </ul>
        </div>
    )
}

