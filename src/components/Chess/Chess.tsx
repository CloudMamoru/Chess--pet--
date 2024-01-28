import React, { useEffect, useState } from 'react';
import styles from './Chess.module.scss';
import Board from '../Board/Board';
import { Board as BoardClass } from '../../models/Board';
import { Player as PlayerClass } from '../../models/Player';
import { Colors } from '../../models/Colors';
import LostFigures from '../LostFigures/LostFigures';
import Timer from '../Timer/Timer';

const Chess = () => {
  const [board, setBoard] = useState(new BoardClass());
  const [whitePlayer, setWhitePlayer] = useState(new PlayerClass(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new PlayerClass(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<PlayerClass | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  function restart() {
    const newBoard = new BoardClass();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  return (
    <div className={styles.chess}>
      <Timer restart={restart} currentPlayer={currentPlayer} />
      <Board
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title='Чёрные фигуры' figures={board.lostBlackFigures} />
        <LostFigures title='Белые фигуры' figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
};

export default Chess;
