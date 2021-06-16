import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import UncontroledOnOff from "./components/UncontroledOnOff/UncontroledOnOff";


function App() {
/*
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3);
*/
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean> (false)
/*
    let [on, setOn] = useState(false)
*/
    console.log('App rendering...')
    return (
        <div className={'App'}>
            <PageTitle title={'This is App component'}/>
            {/*<OnOff />*/}
            {/*<UncontroledOnOff on={on} click={setOn}/>*/}
            <UncontrolledAccordion titleValue='Users' />

            <Accordion collapsed={accordionCollapsed}
                       onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>

            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating />*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
