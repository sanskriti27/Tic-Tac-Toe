import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const message = winner
  // ? `Winner is ${winner}`
  // : `Next player is ${current.isXNextisXNext ? 'X' : 'O'}`;

  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNextisXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'Draw'}
    </h2>
  );
};

export default StatusMessage;
