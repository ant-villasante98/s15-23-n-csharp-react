export const setLocalStorage = (key, value, isString = false) => {
  if (typeof window !== "undefined") {
    if (isString) {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
};

export const getLocalStorage = (key, isString = false) => {
  if (typeof window !== "undefined") {
    if (isString) {
      return localStorage.getItem(key);
    } else {
      return JSON.parse(localStorage.getItem(key));
    }
  }
};
