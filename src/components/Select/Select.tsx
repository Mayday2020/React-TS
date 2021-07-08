import React from "react";
type SelectOptionsType = {
    id: string
    value: string
}
type SelectTypeProps = {
    collapsed: boolean
    onChange: ()=> void
    options: SelectOptionsType[]
    title: string
    onChangeTitle: (title: string)=>void
}
export const Select = (props: SelectTypeProps) => {
    console.log('Select is render')
    return <div>
        <SelectTitle titleValue={props.title} onChange={props.onChange}/>
        <hr/>
        {!props.collapsed && <SelectBody options={props.options}
                                         onChangeTitle={props.onChangeTitle}
                                         onChange={props.onChange}
                                         collapsed={props.collapsed}/>}
    </div>
}
type SelectTitlePropsType = {
    titleValue: string
    onChange: ()=> void
}
function SelectTitle(props: SelectTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onChange}>--- {props.titleValue} ---</h3>
        </div>
    )
}
type SelectBodyPropsType = {
    options: SelectOptionsType[]
    onChangeTitle: (title: string)=>void
    onChange: ()=> void
    collapsed: boolean
}
function SelectBody (props: SelectBodyPropsType) {
    const onChangeSelectTitle = (value: string) => {
        props.onChangeTitle(value)
        props.onChange()
    }
    return (
        <div>
            <ul>
                {props.options.map((item, index) => {
                    return <div onClick={()=>{onChangeSelectTitle(item.value)}}
                               key={index}>{item.value}</div>
                })}
            </ul>
        </div>
    )
}