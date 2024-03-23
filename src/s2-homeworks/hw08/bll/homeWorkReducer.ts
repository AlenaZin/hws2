import {UserType} from '../HW8'

type ActionType = 
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {      
            return action.payload === 'up'
            ? [...state].sort((a, b) => a.name.localeCompare(b.name))
            : [...state].sort((a, b) => b.name.localeCompare(a.name))             
        }
        case 'check': {
            return state.filter(f => f.age >= action.payload)
        }
        default:
            return state
    }
}
