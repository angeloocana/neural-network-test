// import * as assert from 'ptz-assert';
import { getNetwork } from './getNetwork';
import { initialBoard } from './initialBoard';
// import {random} from 'ptz-math';
import {
  xValue,
  loseValue,
  winValue,
  getMyScore
} from './getScore';
import { move } from './move';
import {printBoard} from './printBoard';

const learningRates = {
  invalidMove: 0.3,
  validMove: 0.3,
  win: 0.3,
  lost: 0.3
};

const moveAndPropagate = (net, board, value) => {
  printBoard('old board: ', board);

  const output = net.activate(board);
  console.log('output: ', output);

  const newBoard = move(board, output, value);
  printBoard('new board: ', newBoard);

  if (newBoard) {
    const score = getMyScore(newBoard, value);
    if (score === winValue) {
      net.propagate(learningRates.win, newBoard);
      return null;
    }
    else if (score === loseValue) {
      net.propagate(learningRates.lose, );
      return null;
    }
    else {
      net.propagate(learningRates.validMove, newBoard);
      return newBoard;
    }
  } else {
    net.propagate(learningRates.invalidMove, );
    return board;
  }
};

describe('tic tac toe propagate', () => {
  it('tic tac toe', () => {
    const netX = getNetwork();
    // const netO = getNetwork();

    // const get

    let board = initialBoard;

    for (var i = 0; i < 100; i += 1) {
      board = moveAndPropagate(netX, board, xValue);
      if (board === null) {
        board = initialBoard;
      }
    }
  });
});
