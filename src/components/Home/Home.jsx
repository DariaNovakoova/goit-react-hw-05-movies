import styles from './home.module.css';
import { useState, useEffect } from 'react';

import { getTrending } from 'api/getMovies';
import Loader from 'components/Loader/Loader';
import Movies from 'components/Movies/Movies';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        const respMovies = await getTrending();
        const { results } = respMovies.data;
        setTrending(results?.length ? results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <Loader />}
      {Boolean(trending.length) && <Movies items={trending} />}
    </>
  );
};

export default Home;
