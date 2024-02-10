import styles from './movies.module.css';

import { Link, useLocation } from 'react-router-dom';

const Movies = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title }) => (
    <li key={id} className={styles.item}>
      <Link
        className={styles.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {title}
      </Link>
    </li>
  ));

  return (
    <div className={styles.container}>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
};

export default Movies;
