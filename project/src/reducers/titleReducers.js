// reducers are function that take in two objects - the current state, and an action object - and "reduce" them down to a single object, which is the new state, and return that new object.

// action objects are pieces of data that describe an event that just occurred in the UI. 

// EVENT: click on edit icon to toggle editing state
// { type: 'TOGGLE_EDITING' }

// STATE: { editing: false }

// EXPECTED RESULT: { editing: true }

export const initialState = {
    editing: false,
    title: 'From the reducer 🚀!!!',
    todos: []
};

export const titleReducer = (state, action) => {

    switch(action.type) {
        case "TOGGLE_EDITING":
            return {
                ...state,
                editing: !state.editing 
            };   
        case 'UPDATE_TITLE':
            return {
                ...state,
                title: action.payload,
                editing: false
            }
        case 'ADD_TODO':
            const newTodo = {}
            return {
                ...state,
                todo: [...state.todos, newTodo]
            }
        default:
            return state;
    }

    // if(action.type === 'TOGGLE_EDITING') {
    //     return {
    //         ...state,
    //         editing: !state.editing 
    //     };
    // } else if (action.type === 'CHANGE_TITLE') {
    //     return {
    //         ...state,
    //         title: action.payload,
    //         editing: false
    //     }
    // } else {
    //     return state; 
    // }
}

console.log(titleReducer({ editing: false }, { type: 'TOGGLE_EDITING' }));