export const fetchCharacter = async (id) => {
  const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return await data.json();
};
