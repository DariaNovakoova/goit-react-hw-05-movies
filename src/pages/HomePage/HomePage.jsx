import styles from './home-page.module.css';

import Home from 'components/Home/Home';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending today</h1>
      <Home />
    </div>
  );
};

export default HomePage;
