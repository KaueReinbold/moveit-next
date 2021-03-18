import { useContext } from 'react';

import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';

export function CountDown() {
  const { minutes, seconds, hasFinished, isActive, reset, start } = useContext(
    CountDownContext
  );

  const [minuteLeft, minuteRight] = minutes
    .toString()
    .padStart(2, '0')
    .split('');

  const [secondLeft, secondRight] = seconds
    .toString()
    .padStart(2, '0')
    .split('');

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled onClick={reset} className={styles.countDownButton}>
          Cycle ended
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={reset}
              type="button"
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
            >
              Stop
            </button>
          ) : (
            <button
              onClick={start}
              type="button"
              className={styles.countDownButton}
            >
              Start
            </button>
          )}
        </>
      )}
    </div>
  );
}
