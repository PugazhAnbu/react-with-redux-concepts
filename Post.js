const redux = require('redux');
const reduxLogger = require('redux-logger');
const { createStore, combineReducers, applyMiddleware } = redux
const { createLogger } = reduxLogger
// Action type constant
const INCREAMENT_COUNTER = 'INCREAMENT_COUNTER';
const DECREAMENT_COUNTER = 'DECREAMENT_COUNTER';

//Action creator

const ADD_POST = 'ADD_POST'
const INCREAMENT_FOLLOWER_COUNT = 'INCREAMENT_FOLLOWER_COUNT'

const addpost = (postName) => {
    return { type: ADD_POST, payload: postName }
}

const incrementFollowercount = () => {
    return { type: INCREAMENT_FOLLOWER_COUNT, }
}

////State
const PostinitialState = {
    posts: [],

}
const FollowerinitialState = {

    followers: 0,
}
//Reducer function
// - Contains initial state
// - contains two parameter: prevState and action
// - on the basis of action, it will update the state

const postreducer = (state = PostinitialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }

        default: return state
    }

}


const followerreducer = (state = FollowerinitialState, action) => {
    switch (action.type) {
        case INCREAMENT_FOLLOWER_COUNT:
            return {
                ...state,
                followers: state.followers + 1
            }
        default: return state
    }

}




//Action

// {
//     type: INCREAMENT_COUNTER
// }

// {
//     type: DECREAMENT_COUNTER
// }

const rootreducer = combineReducers(
    {
        post: postreducer,
        follower: followerreducer,
    }
)

const store = createStore(rootreducer, applyMiddleware(createLogger()))
const unsubscribe = store.subscribe(() => console.log('Subscribe'))
//console.log(store.getState())
store.dispatch(addpost('Moutains vs Beaches'))
//console.log(store.getState())
store.dispatch(incrementFollowercount())
store.dispatch(addpost('Pugazh is awesome'))
//console.log(store.getState())
unsubscribe()
