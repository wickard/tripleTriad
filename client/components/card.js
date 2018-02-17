
/// game logic ////
/*


[                     index                          ]
[     0              1              2         3      ]
[    TOP    ,     RIGHT     ,    BOTTOM,    LEFT     ]

*/

// 0 --> 0R VS 1L && 0B VS 3T
const check0 = (board, owner) => {
  if (board[1].owner){
    if (board[1].values[3] < board[0].values[1]){
      board[1].owner = owner
    }
  }
  if (board[3].owner){
    if (board[3].values[0] < board[0].values[2]){
      board[3].owner = owner
    }
  }
}

// 1 --> 1L VS 0R && 1R VS 2L && 1B VS 4T
const check1 = (board, owner) => {
  if (board[0].owner){
    if (board[0].values[1] < board[1].values[3]){
      board[0].owner = owner
    }
  }
  if (board[2].owner){
    if (board[2].values[3] < board[1].values[1]){
      board[2].owner = owner
    }
  }
  if (board[4].owner){
    if (board[4].values[0] < board[1].values[2]){
      board[4].owner = owner
    }
  }
}

// 2 --> 2L VS 1R && 2B VS 5T
const check2 = (board, owner) => {
  if (board[1].owner){
    if (board[1].values[1] < board[2].values[3]){
      board[1].owner = owner
    }
  }
  if (board[5].owner){
    if (board[5].values[0] < board[2].values[2]){
      board[5].owner = owner
    }
  }
}

// 3 --> 3T VS 0B && 3R VS 4L && 3B VS 6T
const check3 = (board, owner) => {
  if (board[0].owner){
    if (board[0].values[2] < board[3].values[0]){
      board[0].owner = owner
    }
  }
  if (board[4].owner){
    if (board[4].values[3] < board[3].values[1]){
      board[4].owner = owner
    }
  }
  if (board[6].owner){
    if (board[6].values[0] < board[3].values[2]){
      board[2].owner = owner
    }
  }
}

// 4 --> 4T VS 1B && 4R VS 5L && 4B VS 7T && 4L VS 3R
const check4 = (board, owner) => {
  if (board[1].owner){
    if (board[1].values[2] < board[4].values[0]){
      board[0].owner = owner
    }
  }
  if (board[5].owner){
    if (board[5].values[3] < board[4].values[1]){
      board[5].owner = owner
    }
  }
  if (board[7].owner){
    if (board[7].values[0] < board[4].values[2]){
      board[2].owner = owner
    }
  }
  if (board[3].owner){
    if (board[3].values[1] < board[4].values[3]){
      board[3].owner = owner
    }
  }
}

// 5 --> 5T VS 2B && 5B VS 8T && 5L VS 4R
const check5 = (board, owner) => {
  if (board[2].owner){
    if (board[2].values[2] < board[5].values[0]){
      board[2].owner = owner
    }
  }
  if (board[8].owner){
    if (board[8].values[0] < board[5].values[2]){
      board[8].owner = owner
    }
  }
  if (board[4].owner){
    if (board[4].values[1] < board[5].values[3]){
      board[4].owner = owner
    }
  }
}

// 6 --> 6T VS 3B && 6R VS 7L
const check6 = (board, owner) => {
  if (board[3].owner){
    if (board[3].values[2] < board[6].values[0]){
      board[3].owner = owner
    }
  }
  if (board[7].owner){
    if (board[7].values[3] < board[0].values[2]){
      board[7].owner = owner
    }
  }
}

// 7 --> 7T VS 4B && 7R VS 8L && 7L VS 6R
const check7 = (board, owner) => {
  if (board[4].owner){
    if (board[4].values[2] < board[7].values[0]){
      board[4].owner = owner
    }
  }
  if (board[8].owner){
    if (board[8].values[3] < board[7].values[1]){
      board[8].owner = owner
    }
  }
  if (board[6].owner){
    if (board[6].values[1] < board[7].values[3]){
      board[6].owner = owner
    }
  }
}

// 8 --> 8T VS 5B && 8L VS 7R

const check8 = (board, owner) => {
  if (board[5].owner){
    if (board[5].values[2] < board[8].values[0]){
      board[5].owner = owner
    }
  }
  if (board[7].owner){
    if (board[7].values[1] < board[8].values[3]){
      board[7].owner = owner
    }
  }
}
