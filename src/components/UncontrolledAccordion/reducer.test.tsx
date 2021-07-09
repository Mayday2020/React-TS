import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', ()=>{
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expection
    expect(newState.collapsed).toBe( true)
})

test('collapsed should be false', ()=>{
    const state: StateType = {
        collapsed: true
    }
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    expect(newState.collapsed).toBe( false)
})

test('fake operator, error type', ()=>{
    const state: StateType = {
        collapsed: true
    }
    expect(()=>{reducer(state, {type: "FAKETYPE"})}).toThrowError()
})
