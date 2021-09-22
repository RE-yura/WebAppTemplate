/**
 * 文字列の命名規則変換 (snake to camel)
 * @param {string} str - Snake case
 * @return {string}    - Camel case
 */
const toCamel = (str: string): string =>
  str
    .split("_")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");

/**
 * 文字列の命名規則変換 (camel to snake)
 * @param {string} str - Camel case
 * @return {string}    - Snake case
 */
const toSnake = (str: string): string =>
  str
    .split(/(?=[A-Z])/)
    .join("_")
    .toLowerCase();

/**
 * オブジェクトの命名規則変換 (snake to camel)
 * @param {{ [key: string]: any }} obj - Snake case
 * @return {T}                         - Camel case
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toCamelObject = <T>(obj: { [key: string]: any }): T => {
  const newObj = {};
  if (obj instanceof Array) {
    return obj.map((value) => {
      const newValue = typeof value === "object" ? toCamelObject(value) : value;
      return newValue;
    }) as unknown as T;
  }
  Object.keys(obj).forEach((origKey) => {
    let value = obj[origKey];
    if (value instanceof Array || (value !== null && value.constructor === Object)) {
      value = toCamelObject(value);
    }
    newObj[toCamel(origKey)] = value;
  });
  return newObj as T;
};

/**
 * オブジェクトの命名規則変換 (camel to snake)
 * @param {{ [key: string]: any }} obj - Camel case
 * @return {T}                         - Snake case
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toSnakeObject = <T>(obj: { [key: string]: any }): T => {
  const newObj = {};
  if (obj instanceof Array) {
    return obj.map((value) => {
      const newValue = typeof value === "object" ? toSnakeObject(value) : value;
      return newValue;
    }) as unknown as T;
  }
  Object.keys(obj).forEach((origKey) => {
    let value = obj[origKey];
    if (value instanceof Array || (value !== null && value.constructor === Object)) {
      value = toSnakeObject(value);
    }
    newObj[toSnake(origKey)] = value;
  });
  return newObj as T;
};
