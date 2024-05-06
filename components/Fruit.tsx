import React from 'react';
import styles from '../styles/Fruit.module.scss';

interface FruitProps {
  position: {
    top: number;
    left: number;
  };
}

const Fruit: React.FC<FruitProps> = ({ position }) => {
  return (
    <div
      id="fruit"
      className={styles.fruit}
      style={{ top: `${position.top}%`, left: `${position.left}%` }}
    />
  );
};

export default Fruit;