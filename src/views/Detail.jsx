import { useParams } from 'react-router-dom';
import { fetchCharacter } from '../services/fetchcharacter';

export const Detail = () => {
  const { id } = useParams();
  const singleChar = fetchCharacter(id);
};
