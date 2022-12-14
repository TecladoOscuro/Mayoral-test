import React, { FC, useEffect, useState } from 'react';
import styles from '../../../styles/Shared.module.css';

const SortButton: FC = ({ onSort }: SortButtonProps) => {
  const sortOptions = {
    0: 'ASC',
    1: 'DES',
  };
  const [btnState, setbtnState] = useState(0);

  useEffect(() => {
    onSort(sortOptions[btnState]);
  }, [btnState]);

  const handleClick = () => {
    setbtnState((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <button className={styles.sortBtn} onClick={handleClick} data-testid="SortButton">
      {sortOptions[btnState]}
    </button>
  );
};

interface SortButtonProps {
  onSort: (value: string) => void;
}

export default SortButton;
