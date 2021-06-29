import React, {useState} from "react";


export const UncontrolledOnOff = ()=>{
    console.log('UncontrolledOnOff rendering...')

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        borderRadius: '3px',
        padding: '5px',
        backgroundColor: on ? 'blue' : 'white'
    }
    const offStyle = {
        width: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        borderRadius: '3px',
        padding: '5px',
        backgroundColor: on ? 'white' : 'yellow'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'blue' : 'yellow'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>on</div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>off</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}