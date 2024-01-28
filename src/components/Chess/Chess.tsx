import React, { useEffect, useState } from 'react';
import styles from './Chess.module.scss';
import Board from '../Board/Board';
import { Board as BoardClass } from '../../models/Board';

const Chess = () => {
  const [board, setBoard] = useState(new BoardClass());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new BoardClass();
    newBoard.initCells();
    setBoard(newBoard);
  }

  return (
    <div className={styles.chess}>
      <Board board={board} setBoard={setBoard} />
    </div>
  );
};

export default Chess;
