import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontroledOnOff/UncontrolledOnOff";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean> (false)
    let [on, setOn] = useState(false)

    console.log('App rendering...')
    return (
        <div className={'App'}>
            <OnOff on={on} onChange={setOn}/>
            <UncontrolledOnOff />
            <UncontrolledAccordion titleValue='Users' />
            <UncontrolledRating />
            <Accordion collapsed={accordionCollapsed}
                       onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}
                       titleValue={'Users'}
                       items={[
                           {title: 'Dimych', value: 1},
                           {title: 'Valera', value: 2},
                           {title: 'Artem', value: 3},
                           {title: 'Viktor', value: 4}
                       ]}
                       onClick={() => {
                       }}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

        </div>
    );
}


export default App;
