// reducers are function that take in two objects - the current state, and an action object - and "reduce" them down to a single object, which is the new state, and return that new object.

// action objects are pieces of data that describe an event that just occurred in the UI. 

// EVENT: click on edit icon to toggle editing state
// { type: 'TOGGLE_EDITING' }

// STATE: { editing: false }

// EXPECTED RESULT: { editing: true }

const titleReducer = (state, action) => {
    let newState;

    if(action.type === 'TOGGLE_EDITING') {
        newState = {
            ...state,
            editing: !state.editing 
        };
    }
    return newState; 
}

console.log(titleReducer({ editing: false }, { type: 'TOGGLE_EDITING' }));