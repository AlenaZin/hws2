import {UserType} from '../HW8'

type ActionType = 
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: {sort: string, check: boolean} }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {      
            return action.payload === 'up'
            ? [...state.sort((a, b) => a.name.localeCompare(b.name))]
            : [...state.sort((a, b) => b.name.localeCompare(a.name))]             
        }
        case 'check': {
            let users = [...state];
            if (action.payload.check) {
                users = users.filter(u => u.age >= 18) 
            } 
            if (action.payload.sort === 'up') {
                users = users.sort((a, b) => a.name.localeCompare(b.name))
            } 
            if (action.payload.sort === 'down') {
                users = users.sort((a, b) => b.name.localeCompare(a.name))
            }
            return users;
        }
        default:
            return state
    }
}
