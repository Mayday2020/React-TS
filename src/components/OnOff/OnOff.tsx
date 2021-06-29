import React from "react";

type PropsType = {
    on?: boolean
    onChange: (value: boolean)=> void
}

const OnOff = (props: PropsType)=>{
    console.log('UncontrolledOnOff rendering...')

    const onStyle = {
        width: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        borderRadius: '3px',
        padding: '5px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        borderRadius: '3px',
        padding: '5px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>{props.onChange(true)}}>on</div>
            <div style={offStyle} onClick={() => {props.onChange(false)}}>off</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}
export default OnOff