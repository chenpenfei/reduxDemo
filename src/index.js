import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import redux from 'redux'

function reducers (state, action) {
    if(state == undefined){
        state = 0
    }

    if(action.type == 'ADD'){
        function reducers (state, action) {
            if(state == undefined){
                state = 0
            }

            if(action.type == 'ADD'){
                return state+1;
            }
            if(action.type == 'REDUCE'){
                return state-1;
            }

            return state;
        }
        return state+1;
    }
    if(action.type == 'REDUCE'){
        return state-1;
    }

    return state;
}
let store = Redux.createStore(reducers)
store.subscribe(render)

store.dispatch({type:'ADD'})

ReactDOM.render(<App />, document.getElementById('root'));
