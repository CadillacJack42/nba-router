import { useEffect, useState } from 'react';
import { useData } from '../hooks/useContext';
import { fetchData } from '../services/fetchData';
import styles from '../App.css';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const useMe = useData();

  useEffect(() => {
    fetchData()
      .then((data) => useMe.setCharacters(data))
      .then(setLoading(false))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const pageString = useMe.characters?.info?.next;
    const stringSplit = pageString?.split('');
    stringSplit && useMe.setPage(stringSplit[stringSplit.length - 1]);
  }, [loading, useMe.characters]);

  return (
    <>
      <h1>Rick And Morty Characters List</h1>
      <div className={styles['page-nav']}>
        <button>{'<'}</button>
        <h4 className={styles['page-page']}>Page: {useMe.page - 1}</h4>
        <button>{'>'}</button>
      </div>
      {useMe.characters.results ? (
        useMe.characters.results.map((char) => {
          return <h3 key={char.id}>{char.name}</h3>;
        })
      ) : (
        <h1>Loading Rick And Morty Characters</h1>
      )}
    </>
  );
};
