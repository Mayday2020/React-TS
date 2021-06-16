import React from "react";

type AccordionPropsType = {
    collapsed: boolean
    onChange: ()=> void
}
type AccordionTitlePropsType = {
    onChange: ()=> void

}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering...')
    return (
        <div>
            <AccordionTitle onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion;