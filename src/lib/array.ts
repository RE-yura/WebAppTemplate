/**
 * 連番を生成
 * @param {number} start    - スタート値
 * @param {number} stop     - ストップ値
 * @param {number} [step=1] - ステップ値
 * @return {number[]}       - 連番配列 (ex: [3,4,5,6,7])
 */
export const range = (start: number, stop: number, step = 1): number[] =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
