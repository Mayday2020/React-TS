import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log('SimpleExample')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(()=>{
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(()=>{
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(()=>{
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={ () => { setCounter(counter +1) } }> + count </button>
        <button onClick={ () => { setFake(fake +1) } }> + fake </button>
        </>
};

export const SimpleExample1 = () => {
    console.log('SimpleExample')
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('SimpleExample done!')
    useEffect(()=>{
        /*setInterval(()=>{
            console.log('setInterval done!')
            setCounter(state => state + 1)
        }, 1000)*/
    }, [])


    return <>
        Hello, count = {counter}  | fake = {fake}
        {/*<button onClick={ () => { setCounter(counter +1) } }> + count </button>
        <button onClick={ () => { setFake(fake +1) } }> + fake </button>*/}
    </>
};


