import React, { FC, useEffect, useState } from 'react';
import styles from '../../../styles/Shared.module.css';

const SearchBar: FC = ({ onFilter }: SearchBarProps) => {
  const [inputValue, setinputValue] = useState('');
  useEffect(() => {
    onFilter(inputValue);
  }, [inputValue]);

  return (
    <div className={styles.searchBarContainer} data-testid="searchBar">
      <input
        data-testid="searchBar-input"
        type="search"
        className={styles.searchBarContainer__input}
        placeholder="Buscar"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.searchBarContainer__inputIcon}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

interface SearchBarProps {
  onFilter: (value: string) => void;
}

export default SearchBar;
