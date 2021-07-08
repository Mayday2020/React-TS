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
export const ControlledInput = () => {
  let [parentValue, setParentValue] = useState("")
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setParentValue(event.currentTarget.value)
  }
  return <input value={parentValue} type="mail" onChange={ onChange }/>
}
export const ControlledCheckbox = () => {
  let [parentValue, setParentValue] = useState(true)
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setParentValue(event.currentTarget.checked)
  }
  return <input checked={parentValue} type="checkbox" onChange={ onChange }/>
}
export const ControlledSelect = () => {
  let [parentValue, setParentValue] = useState<string | undefined>('1')
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(event.currentTarget.value)
  }
  return <select value={parentValue} onChange={ onChange }>
    <option>none</option>
    <option value="1">Kiev</option>
    <option value="2">Moscow</option>
    <option value="3">Minsk</option>
  </select>
}

