import React, { FC } from 'react';
import styles from './Board.module.scss';
import Cell from '../Cell/Cell';
import { Board as BoardClass } from 'src/models/Board';

interface BoardProps {
  board: BoardClass;
  setBoard: (board: BoardClass) => void;
}

const Board: FC<BoardProps> = ({ board, setBoard }) => {
  return (
    <div className={styles.board}>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <Cell cell={cell} key={cell.id} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Board;
