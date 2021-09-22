/**
 * Sort Object's Array by key
 * @param {Array<any>} array             - 連想配列
 * @param {string} key                   - 並び替え基準キー
 * @param {"asc" | "desc"} [order="asc"] - 降順/昇順
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ObjArraySort = (array: Array<any>, key: string, order: "asc" | "desc"): void => {
  let reverse = 1;
  if (order && order.toLowerCase() === "desc") reverse = -1;
  array.sort((a, b) => {
    if (a[key] < b[key]) return -1 * reverse;
    if (a[key] === b[key]) return 0;
    return 1 * reverse;
  });
};
