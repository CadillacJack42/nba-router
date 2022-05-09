import { useData } from '../hooks/useContext';

export const fetchData = async () => {
  //   const { setCharacters } = useData();
  const data = await fetch('https://rickandmortyapi.com/api/character');
  //   setCharacters(await data.json());
  return await data.json();
};
