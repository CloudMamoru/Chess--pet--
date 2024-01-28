import React, { FC } from 'react';
import styles from './Cell.module.scss';
import { Cell as CellClass } from 'src/models/Cell';

interface CellProps {
  cell: CellClass;
}

const Cell: FC<CellProps> = ({ cell }) => {
  return (
    <div className={[styles.cell, styles[cell.color]].join(' ')}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt='' />}
    </div>
  );
};

export default Cell;
