import React, { FC } from 'react';
import { Figure as FigureClass } from 'src/models/figures/Figure';
import LostFigures from './LostFigures/LostFigures';
import styles from './LostFigureBlock.module.scss';

interface LostFiguresBlockProps {
  lostBlackFigures: FigureClass[];
  lostWhiteFigures: FigureClass[];
}

const LostFigureBlock: FC<LostFiguresBlockProps> = ({ lostBlackFigures, lostWhiteFigures }) => {
  return (
    <div className={styles.lostFigureBlock}>
      <LostFigures title='Чёрные фигуры' figures={lostBlackFigures} />
      <LostFigures title='Белые фигуры' figures={lostWhiteFigures} />
    </div>
  );
};

export default LostFigureBlock;
