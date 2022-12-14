import Image from 'next/image';
import React, { FC } from 'react';
import styles from '../../../../styles/Home.module.css';
import { applyDiscount } from '../../../utils/shirts-utils';

const Card: FC = ({ data, mobileView }: CardProps) => {
  return (
    <div className={styles.cardContainer} data-testid="card">
      <div className={styles.cardContainer__imageSection}>
        <Image alt="shirt image" src={data.imageUrl} height={300} width={300} />
      </div>
      <div className={styles.cardContainer__middleSection}>
        <div
          style={{ width: mobileView ? '50%' : '100%' }}
          className={styles.cardContainer__middleSection__descriptionSection}
        >
          <span
            className={styles.cardContainer__middleSection__descriptionSection__cardDescription}
          >
            {data.description}
          </span>
        </div>
        <div className={styles.cardContainer__middleSection__priceSection}>
          <span
            className={
              data.hasDiscounts
                ? styles.cardContainer__middleSection__priceSection__price__applyDiscount
                : styles.cardContainer__middleSection__priceSection__price
            }
          >
            {data.price} €
          </span>
        </div>
        <div className={styles.cardContainer__middleSection__discountSection}>
          {data.hasDiscounts && (
            <span className={styles.cardContainer__middleSection__discountSection__discountPrice}>
              {`${applyDiscount(data.price, data.discount)} € (${data.discount}%)`}
            </span>
          )}
        </div>
        <div className={styles.cardContainer__middleSection__moreColoursSection}>
          {data.hasMoreColours && (
            <span
              className={styles.cardContainer__middleSection__moreColoursSection__moreColoursLink}
            >
              más colores
            </span>
          )}
        </div>
      </div>
      <div className={styles.cardContainer__buttonSection}>
        <button className={styles.cardContainer__buttonSection__addBtn}>AÑADIR</button>
      </div>
    </div>
  );
};

interface CardProps {
  data: {
    imageUrl: string;
    description: string;
    price: number;
    hasDiscounts: boolean;
    hasMoreColours: boolean;
    discount: number;
  };
  mobileView: boolean;
}

export default Card;
