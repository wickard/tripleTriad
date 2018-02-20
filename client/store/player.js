import { fireDb } from "../firebase";

////ACTION TYPE
const CHANGE_PLAYER = 'CHANGE_PLAYER'


//ACTION CREATOR

export function player(player){
  const action = {type: CHANGE_PLAYER, player}
  return action
}


//REDUCER

export default function playerReducer (state = 0, action){
  switch (action.type){
    case CHANGE_PLAYER:
     return action.player
    default:
      return state
  }
}

/// thunk

export function changePlayer(){
  return dispatch => {
    fireDb.ref('player').once('value', snap => {
      dispatch(player(snap.val()))
    })
  }

}
