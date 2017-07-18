export default function({ dispatch }) {
    return next => action => {

        // If action doesn't have a payload or a .then property,
        // we dont care about it    
        if(!action.payload || !action.payload.then) {
            return next(action);
        }

        // console.log('we have a promise');
        // Make sure the action's promise resolves 
        action.payload
            .then((response) => {
                
                // Create a new action with the old type, but 
                // replace the promise with the response data 
                const newAction = {...action, payload: response };
                dispatch(newAction);
            });
    }
}