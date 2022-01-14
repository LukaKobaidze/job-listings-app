import { useSearchParams } from 'react-router-dom';

const useUpdateSearchParams = (search: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearchParams = Object.fromEntries(searchParams);

  const add = (param: string) => {
    if (
      currentSearchParams[search] &&
      currentSearchParams[search].indexOf(param) !== -1
    )
      return;

    currentSearchParams[search] = (
      (currentSearchParams[search] || '') +
      ' ' +
      param
    ).trim();

    setSearchParams(currentSearchParams);
  };

  const remove = (param: string) => {
    currentSearchParams[search] = currentSearchParams[search]
      .replace(param, '')
      .replace(/\s\s+/g, ' ')
      .trim();

    if (!currentSearchParams[search]) {
      delete currentSearchParams[search];
    }
    setSearchParams(currentSearchParams);
  };

  const clear = () => {
    delete currentSearchParams[search];
    setSearchParams(currentSearchParams);
  };

  return { add, remove, clear };
};

export default useUpdateSearchParams;
