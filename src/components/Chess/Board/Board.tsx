import React, { FC, useEffect, useState } from 'react';
import styles from './Board.module.scss';
import Cell from '../Cell/Cell';
import { Board as BoardClass } from '../../../models/Board';
import { Cell as CellClass } from '../../../models/Cell';
import { Player as PlayerClass } from '../../../models/Player';
import { Colors } from '../../../models/Colors';

interface BoardProps {
  board: BoardClass;
  setBoard: (board: BoardClass) => void;
  currentPlayer: PlayerClass | null;
  swapPlayer: () => void;
}

const Board: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
  const [selectedCell, setSelectedCell] = useState<CellClass | null>(null);

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  function clickCell(cell: CellClass) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
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
    <div>
      {/* <h1 className={styles.step}>{`Ход ${
        currentPlayer?.color === Colors.BLACK ? 'черных' : 'белых'
      }`}</h1> */}
      <div className={styles.boardWrapper}>
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
      </div>
    </div>
  );
};

export default Board;
