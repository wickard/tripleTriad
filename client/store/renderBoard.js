//ACTION TYPE
const ADD_TO_FB = 'ADD_TO_FB'

//ACTION CREATORS

export function addToFb(card) {
  const action = {type: ADD_TO_FB, card}
  return action
}

// THUNKS

export function fetchUsers () {
  return function thunk(dispatch){
    return axios.get('api/users')
      .then(res => res.data)
      .then(users => {
        const action = getUsers(users)
        dispatch(action)
      })
  }
}


//REDUCER

export default function usersReducer (state = [], action){
  switch (action.type){
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
