import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Timer.module.scss';
import { Player as PlayerClass } from '../../../models/Player';
import { Colors } from '../../../models/Colors';

interface TimerProps {
  currentPlayer: PlayerClass | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(1000);
  const [whiteTime, setWhiteTime] = useState(1000);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
  }

  const handleRestart = () => {
    setBlackTime(1000);
    setWhiteTime(1000);
    restart();
  };

  return (
    <div className={styles.timerWrapper}>
      <h1 className={styles.step}>{`Ход ${
        currentPlayer?.color === Colors.BLACK ? 'черных' : 'белых'
      }`}</h1>
      <div className={styles.timer}>
        <h2>{blackTime}</h2>
        <div>
          <button className={styles.timerButton} onClick={handleRestart}>
            Перезапустить
          </button>
        </div>
        <h2>{whiteTime}</h2>
      </div>
    </div>
  );
};

export default Timer;
