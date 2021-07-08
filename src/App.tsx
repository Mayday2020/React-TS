import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontroledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)
    let [selectOn, setSelectOn] = useState(true)
    let [titleSelect, setTitleSelect] = useState('selectTitle')
    console.log('App rendering...')
    return (
        <div className={'App'}>
            <OnOff on={on} onChange={setOn}/>
            <UncontrolledOnOff/>
            <UncontrolledAccordion titleValue='Users'/>
            <UncontrolledRating/>
            <Accordion collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       titleValue={'Users'}
                       items={[
                           {id: '1', title: 'Dimych', value: 1},
                           {id: '2', title: 'Valera', value: 2},
                           {id: '3', title: 'Artem', value: 3},
                           {id: '4', title: 'Viktor', value: 4}
                       ]}
                       onClick={() => {
                           alert('123!!!')
                       }}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Select collapsed={selectOn}
                    onChange={()=>{setSelectOn(!selectOn)}}
                    options={[
                            {id: '1', value: 'Minsk'},
                            {id: '1', value: 'Moscow'},
                            {id: '1', value: 'Kiev'}
                        ]}
                    title={titleSelect}
                    onChangeTitle={setTitleSelect}/>
        </div>
    );
}


export default App;
