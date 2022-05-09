import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../hooks/useContext';
import { fetchCharacter } from '../services/fetchcharacter';

export const Detail = () => {
  const { id } = useParams();
  const useMe = useData();

  useEffect(() => {
    fetchCharacter(id)
      .then((data) => useMe.setCharacters(data))
      .catch((error) => console.error(error));
  }, []);

  return <h1>{useMe.characters.name}</h1>;
};
