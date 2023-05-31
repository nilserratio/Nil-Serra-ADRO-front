const useLocalStorage = () => {
  const setToken = (key: string, value: string) =>
    localStorage.setItem(key, value);

  const getToken = (key: string) => {
    return localStorage.getItem(key);
  };

  return { setToken, getToken };
};

export default useLocalStorage;
