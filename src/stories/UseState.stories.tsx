import React, {useState} from 'react';

export default {
    title: 'useState demo'
};
function generateData(){
    console.log('generateData')
    return 1;
}
export const Example1 = () => {
    console.log('Example1')

/*
    const initValue = useMemo(generateData, []);
*/

    let [counter, setCounter] = useState<number>(generateData)
    return <>
        <button onClick={() => { setCounter(state => ++state ) }}> + </button>
        {counter}
    </>
}

