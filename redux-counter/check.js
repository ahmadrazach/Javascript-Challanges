import { createStore } from './node_modules/redux'

//1- Create a basic router
const rootReducer=(state=0,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}


//2- create a store
let store = createStore(counterReducer)
store.subscribe(() => console.log(store.getState()))

//3. Dispatch Actions
store.dispatch({type:"INCREMENT"});
console.log("State after the increment = ", store.getState());