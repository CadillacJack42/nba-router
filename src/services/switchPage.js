import { useData } from '../hooks/useContext';

export const Paginate = async (direction) => {
  const imContext = useData();
  let response;
  if (direction === 'forward') {
    response = await fetch(imContext.characters.info.next);
    imContext.setCharacters(await response.json());
  } else {
    response = await fetch(imContext.characters.info.prev);
    imContext.setCharacters(await response.json());
  }
};
