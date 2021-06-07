import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";

function App() {
    console.log('App rendering...')
    return (
        <div>
            <PageTitle title={'This is App component'}/>
            <UncontrolledAccordion titleValue='Users' />
            <UncontrolledAccordion titleValue='Menu' />
            {/*<Accordion titleValue='Menu' collapsed={false}/>
            <Accordion titleValue='Users' collapsed={false}/>*/}
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
