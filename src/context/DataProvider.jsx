import { useState, createContext } from 'react';

export const dataContext = createContext();

export const ProvideData = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [filteredChars, setFilteredChars] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <dataContext.Provider value={{ characters, filteredChars, page }}>
      {children}
    </dataContext.Provider>
  );
};
