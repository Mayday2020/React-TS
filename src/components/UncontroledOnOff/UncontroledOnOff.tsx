import React, {useState} from "react";

type PropsType = {
    on: boolean
    click: (pick: boolean) => void
}

const UncontroledOnOff = (props: PropsType)=>{
    console.log('UncontroledOnOff rendering...')

/*
    let [on, setOn] = useState(false)
*/

    const onStyle = {
        width: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        borderRadius: '3px',
        padding: '5px',
        backgroundColor: props.on ? 'blue' : 'white'
    }
    const offStyle = {
        width: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        borderRadius: '3px',
        padding: '5px',
        backgroundColor: props.on ? 'white' : 'yellow'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'blue' : 'yellow'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.click(true)
            }}>on</div>
            <div style={offStyle} onClick={() => {
                props.click(false)
            }}>off</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}
export default UncontroledOnOff;