import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useData } from '../hooks/useContext';
import { fetchData } from '../services/fetchData';

export const Load = () => {
  const useMe = useData();

  useEffect(() => {
    fetchData()
      .then((data) => useMe.setCharacters(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <Redirect to="/character" />;
};
