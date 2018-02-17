import axios from 'axios'

//ACTION TYPE
const GET_USERS = 'GET_USERS'

//ACTION CREATORS

export function getUsers(users) {
  const action = {type: GET_USERS, users}
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
