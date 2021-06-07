import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    //collapsed: boolean
}
function UnControlledAccordion(props: AccordionPropsType) {
    //const collapsed = true
    let [collapsed, setCollapsed] = useState(false);
    if (collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/><button onClick={()=>{
                setCollapsed(false)}}>TOGGLE</button>
                <hr/>
            </div>
        )
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}/><button onClick={()=>{
            setCollapsed(true)}}>TOGGLE</button>
            <AccordionBody />
            <hr/>
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <>
            <h3>{props.title}</h3>
        </>
    )
}

function AccordionBody() {
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}
export default UnControlledAccordion;