import { useData } from '../hooks/useContext';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from '../App.css';

export const Home = () => {
  const history = useHistory();
  const useMe = useData();

  useEffect(() => {
    console.log(useMe.page);
    if (useMe.page === 1) {
      fetch('https://rickandmortyapi.com/api/character/?page=1')
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
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${Number(useMe.page)}`
    )
      .then((response) => response.json())
      .then((json) => useMe.setCharacters(json))
      .catch((error) => console.error(error))
      .finally(() => history.push(`/character?page=${Number(useMe.page)}`));
  }, [useMe.page]);

  const handlePage = async (direction) => {
    let response;
    if (direction === 'forward') {
      await useMe.setPage((prevState) => Number(prevState) + 1);
    } else {
      await useMe.setPage((prevState) => Number(prevState) - 1);
    }
  };

  return (
    <>
      <h1>Rick And Morty Characters List</h1>
      <div className={styles['page-nav']}>
        <button onClick={() => handlePage('back')}>{'<'}</button>
        <h4 className={styles['page-page']}>Page: {Number(useMe.page)}</h4>
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
