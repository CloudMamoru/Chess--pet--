import React, { FC } from 'react';
import styles from './Cell.module.scss';
import { Cell as CellClass } from 'src/models/Cell';

interface CellProps {
  cell: CellClass;
}

const Cell: FC<CellProps> = ({ cell }) => {
  return <div className={[styles.cell, styles[cell.color]].join(' ')}></div>;
};

export default Cell;
