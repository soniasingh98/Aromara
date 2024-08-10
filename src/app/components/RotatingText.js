import styles from '../styles/RotatingText.module.css';

const RotatingText = () => {
  return (
    <div className={styles.marquee}>
      <p className={styles.text}>
        <span className={styles.item}>ESPRESSO </span>
        <span className={styles.item}>MOCHA</span>
        <span className={styles.item4}>CAPPUCCINO</span>
        <span className={styles.item4}>LATTE</span>
      </p>
      <p>
      <span className={styles.item1}>CAPPUCCINO</span>
      <span className={styles.item1}>LATTE</span>
      </p>
   
      </div>
  );
};

export default RotatingText;