const useLocalStorage = () => {
  const setToken = (key: string, value: string) =>
    localStorage.setItem(key, value);

  const getToken = (key: string) => {
    return localStorage.getItem(key);
  };

  const removeToken = (key: string) => localStorage.removeItem(key);

  return { setToken, getToken, removeToken };
};

export default useLocalStorage;
