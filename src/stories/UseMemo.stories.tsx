import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}
export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1
    resultA = useMemo(()=>{
        let tempResult = 1;
        for (let i = 1; i <= a; i++){
            let fake = 0;
            while(fake < 10000){
                fake++
                const fakeValue = Math.random()
            }
            tempResult *= i;
        }

        return tempResult
    }, [a])

    for (let i = 1; i <= b; i++){
        resultB *= i;
    }
    return <>
        <input value={a} onChange={e => setA(+e.target.value)}/>
        <input value={b} onChange={e => setB(+e.target.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
        </>
};


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')
    return <div>
        {props.users.map((u, i)=> (<div key={i}>{u}</div>))}
    </div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])

    const newArray = useMemo(()=>{
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])
    const addUser =() => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <div>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add User</button>
        {counter}
        <Users users={newArray}/>
    </div>
}