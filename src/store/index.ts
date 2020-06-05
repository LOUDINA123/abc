import {createStore} from 'redux'

class initState{
    value!:string
}

const reducer = (state:initState[]=[],action:any)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    value:action.value
                }
            ]
            
        default:
            return state
    }
}

const store=createStore(reducer)
export default store