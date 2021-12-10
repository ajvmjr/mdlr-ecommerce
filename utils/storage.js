const { parse, stringify } = JSON;

export const getStorage = (key) => {
  if (!window) return;

  const item = window.localStorage.getItem(key);

  return parse(item);
};

export const setStorage = (key, value) => {
  if (!window) return;

  const item = stringify(value);

  window.localStorage.setItem(key, item);
};

export const removeStorage = (key) => {
  if (!window) return;

  window.localStorage.removeItem(key);
}
