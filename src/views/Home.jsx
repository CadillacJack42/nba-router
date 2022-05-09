import { useData } from '../hooks/useContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.css';

export const Home = () => {
  const useMe = useData();

  useEffect(() => {
    console.log(useMe.page);
    if (useMe.page === 1) {
      fetch(`https://rickandmortyapi.com/api/character/?page=1`)
        .then((response) => response.json())
        .then((json) => useMe.setCharacters(json))
        .catch((error) => console.error(error));
    } else if (useMe.page > 1) {
      fetch(`https://rickandmortyapi.com/api/character/?page=${useMe.page - 1}`)
        .then((response) => response.json())
        .then((json) => useMe.setCharacters(json))
        .catch((error) => console.error(error));
    }
  }, []);

  useEffect(() => {
    const pageString = useMe.characters?.info?.next;
    const stringSplit = pageString?.split('');
    stringSplit && useMe.setPage(stringSplit[stringSplit.length - 1]);
  }, [useMe.characters]);

  const handlePage = async (direction) => {
    let response;
    if (direction === 'forward') {
      response = await fetch(useMe.characters.info.next);
      useMe.setCharacters(await response.json());
    } else {
      response = await fetch(useMe.characters.info.prev);
      useMe.setCharacters(await response.json());
    }
  };

  return (
    <>
      <h1>Rick And Morty Characters List</h1>
      <div className={styles['page-nav']}>
        <button onClick={() => handlePage('back')}>{'<'}</button>
        <h4 className={styles['page-page']}>Page: {useMe.page - 1}</h4>
        <button onClick={() => handlePage('forward')}>{'>'}</button>
      </div>

      {useMe.characters.results ? (
        useMe.characters.results.map((char) => {
          return (
            <Link key={char.id} to={`/character/${char.id}`}>
              <h3>{char.name}</h3>
            </Link>
          );
        })
      ) : (
        <h1>Loading Rick And Morty Characters</h1>
      )}
    </>
  );
};
