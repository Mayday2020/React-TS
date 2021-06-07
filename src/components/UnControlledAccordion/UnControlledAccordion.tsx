import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed?: boolean
}
function UnControlledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AccordionTitle title={props.titleValue}/><button onClick={()=>{
            !collapsed ? setCollapsed(true): setCollapsed(false)}}>TOGGLE</button>
            {collapsed && <AccordionBody/>}
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