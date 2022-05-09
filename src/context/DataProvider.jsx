import React from 'react';
import { useState, createContext } from 'react';

export const DataContext = createContext();

export const ProvideData = ({ children }) => {
  const [characters, setCharacters] = useState({ info: {}, results: [] });
  const [filteredChars, setFilteredChars] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <DataContext.Provider
      value={{
        characters,
        setCharacters,
        filteredChars,
        setFilteredChars,
        page,
        setPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
