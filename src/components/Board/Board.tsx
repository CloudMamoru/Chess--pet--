import React, { FC, useEffect, useState } from 'react';
import styles from './Board.module.scss';
import Cell from '../Cell/Cell';
import { Board as BoardClass } from 'src/models/Board';
import { Cell as CellClass } from 'src/models/Cell';

interface BoardProps {
  board: BoardClass;
  setBoard: (board: BoardClass) => void;
}

const Board: FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<CellClass | null>(null);

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  function clickCell(cell: CellClass) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    } else {
      setSelectedCell(cell);
    }
  }

  function highlightCells() {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className={styles.board}>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <Cell
              clickCell={clickCell}
              cell={cell}
              key={cell.id}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Board;
