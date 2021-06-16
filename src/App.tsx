import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import OnOff from "./components/OnOff/OnOff";

function App() {
    console.log('App rendering...')
    return (
        <div className={'App'}>
            <PageTitle title={'This is App component'}/>
            <OnOff />
            <UncontrolledAccordion titleValue='Users' />
            <Accordion titleValue='Menu' collapsed={false}/>
            <Rating value={3}/>
            <UnControlledRating />
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
