import React from 'react'
import { connect } from 'react-redux'
import Space from './space'

function board(props){
  const spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  return (
        <div id="board">
          {
            spaces.map(space => <Space owner={props.board[space].owner} key={space} idx={space} />)
          }
        </div>
  )
}

function mapStateToProps(state){
  return {
    users: state.users,
    cards: state.cards,
    board: state.board
  }
}

const Container = connect(mapStateToProps)(board)

export default Container
