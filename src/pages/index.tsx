import { NextPage } from 'next';
import ShirtsList from '../components/shirts';
import styles from '../../styles/Home.module.css';

const HomePage: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
      <ShirtsList />
    </div>
  );
};

export default HomePage;
