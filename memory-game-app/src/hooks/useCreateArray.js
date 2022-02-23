import { useState, useEffect } from 'react';

const useCreateArray = (obj) => {
  const [array, setArrayItems] = useState([]);

  useEffect(() => {
    setArrayItems(...array, Object.values(obj));
  }, [obj])

  return array;
}

export default useCreateArray;