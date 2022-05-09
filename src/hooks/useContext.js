import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

export const useData = () => {
  const context = useContext(DataContext);

  if (context === undefined) throw new Error('Context not configured properly');

  return context;
};
