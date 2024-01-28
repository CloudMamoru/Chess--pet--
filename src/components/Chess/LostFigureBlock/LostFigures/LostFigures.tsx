import React, { FC } from 'react';
import styles from './LostFigures.module.scss';
import { Figure as FigureClass } from 'src/models/figures/Figure';

interface LostFiguresProps {
  title: string;
  figures: FigureClass[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.lost}>
        {figures.map((figure) => (
          <div key={figure.id}>{figure.logo && <img src={figure.logo} />}</div>
        ))}
      </div>
    </div>
  );
};

export default LostFigures;
