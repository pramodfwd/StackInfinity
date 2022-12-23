//Redux Duck Pattern

//Action Type
export const ADD = "add_task"
export const REMOVE = "remove"


// Action Creators
export function taskAdded({ id, description, status }) {
    return {
        type: ADD,
        payload: {
            id,
            description,
            status
        }
    }
}

export function taskDeleted(id) {
    return {
        type: REMOVE,
        payload: {
            id
        }
    }
}



//Reducer 
export  const reducer=(state=[],action)=>{
    if(action.type===ADD)
    {
        return [
            ...state,
            {
                id:action.payload.id,
                description:action.payload.description,
                status:action.payload.status
            }
        ]
    }
    else if(action.type===REMOVE){
        return state.filter(item=>item.id !== action.payload.id )
    }
    else{
        return state
    }
}
