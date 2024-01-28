import React, { FC } from 'react';
import styles from './Cell.module.scss';
import { Cell as CellClass } from 'src/models/Cell';

interface CellProps {
  cell: CellClass;
  selected: boolean;
  clickCell: (cell: CellClass) => void;
}

const Cell: FC<CellProps> = ({ cell, selected, clickCell }) => {
  console.log(selected);
  return (
    <div
      className={[styles.cell, styles[cell.color], selected ? styles.selected : ''].join(' ')}
      onClick={() => clickCell(cell)}
      // Delete this!
      style={{ background: cell.available && cell.figure ? 'green' : '' }}
    >
      {cell.available && !cell.figure && <div className={styles.available}></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt='' />}
    </div>
  );
};

export default Cell;
