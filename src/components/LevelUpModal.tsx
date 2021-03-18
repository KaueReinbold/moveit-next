import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, closeLevelModalUp } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Congratulations</strong>
        <p>You reach a new level</p>
        <button type="button" onClick={closeLevelModalUp}>
          <img src="/icons/close.svg" alt="Close" />
        </button>
      </div>
    </div>
  );
}
