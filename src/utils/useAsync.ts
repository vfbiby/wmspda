import {useState} from 'react';

export const useAsync = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const run = async (promise: Promise<T>) => {
    return promise.then((response) => setData(response));
  };
  return {data, run};
};
