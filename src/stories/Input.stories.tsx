import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
    /*component: OnOff*/
};

export const uncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange =
      (event: ChangeEvent<HTMLInputElement>) => {
        let actualValue = event.currentTarget.value;
        setValue(actualValue);
      }
    return <div><input type="text" onChange={ onChange }/> - {value}
    </div>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
      const el = inputRef.current as HTMLInputElement;
      setValue(el.value)
    }
    return <div>
      <input ref={inputRef} type="number"/>
      <button onClick={ save }> save </button> - {value}
    </div>
}

