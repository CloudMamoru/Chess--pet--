import React, { FC } from 'react';
import styles from './LostFigures.module.scss';
import { Figure as FigureClass } from 'src/models/figures/Figure';

interface LostFiguresProps {
  title: string;
  figures: FigureClass[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className={styles.lost}>
      <h3>{title}</h3>
      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.name} {figure.logo && <img src={figure.logo} />}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;
