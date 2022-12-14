import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Shirt } from '../../models/Shirts';
import { shirtsList } from '../../../tests/mocks/shirts';
import SearchBar from '../shared/SearchBar';
import SortButton from '../shared/SortButton';
import styles from '../../../styles/Home.module.css';
import { applyDiscount } from '../../utils/shirts-utils';

const ShirtsList = () => {
  const ogData = shirtsList.map((i) => new Shirt(i));
  const [data, setdata] = useState(ogData);
  const [mobileView, setmobileView] = useState(false);

  const handleFilter = (value: string): void =>
    setdata(
      value === ''
        ? ogData
        : ogData.filter((i) => i.description.toLowerCase().includes(value.toLocaleLowerCase())),
    );

  const handleSort = (value: string): void => {
    const copyData = [...data];
    const newArray = copyData.sort((a, b) => {
      const aPriceToCompare: number = a.hasDiscounts ? applyDiscount(a.price, b.discount) : a.price;
      const bPriceToCompare: number = b.hasDiscounts ? applyDiscount(b.price, b.discount) : b.price;

      return aPriceToCompare - bPriceToCompare;
    });
    const result = value === 'DES' ? newArray.reverse() : newArray;

    setdata(result);
  };

  return (
    <div className={mobileView ? styles.simulateMobileView : ''} data-testid="ShirtsList">
      <div
        className={styles.shirtContainerHeader}
        style={{ flexDirection: mobileView ? 'column-reverse' : 'inherit' }}
      >
        <div className={styles.shirtContainerHeader__headerSection}>
          <SearchBar onFilter={handleFilter} />
          <SortButton onSort={handleSort} />
        </div>
        <div className={styles.shirtContainerHeader__buttonGroup}>
          <button
            data-testid="desktop-view-btn"
            className={styles.shirtContainerHeader__buttonGroup__button}
            onClick={() => setmobileView(false)}
          >
            -
          </button>
          <button
            data-testid="mobile-view-btn"
            className={styles.shirtContainerHeader__buttonGroup__button}
            onClick={() => setmobileView(true)}
          >
            +
          </button>
        </div>
      </div>
      {mobileView && (
        <div data-testid="mobile-view-divider" className={styles.simulateMobileView__divider}></div>
      )}
      <div
        className={styles.shirtsListContainer}
        style={{ margin: mobileView ? 'auto' : '32px 0px 0px 0px' }}
      >
        {data.length > 0 ? (
          data.map((shirt) => <Card data={shirt} key={shirt.id} mobileView={mobileView} />)
        ) : (
          <p data-testid="data-not-found">Data not found</p>
        )}
      </div>
    </div>
  );
};

export default ShirtsList;
