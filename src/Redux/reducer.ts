

export interface noteState {
    note: string[]
}

const internitalState = {
    note: []
}

type Action = {
    type: "ADD",
    payload: string
}

export const reducer = (state: noteState = internitalState, action: Action) => {
    switch (action.type) {
        case "ADD": return {
            ...state,
            note: [...state.note, action.payload]
        }
        default: return state
    }

}