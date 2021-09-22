/**
 * Date to UnixTime
 * @param {Date} date - Date
 * @return {number}   - UnixTime
 */
export const DateToUnix = (date: Date): number => {
  const unixtime = Math.floor(date.getTime() / 1000);
  return unixtime;
};

/**
 * UnixTime to Date
 * @param {number} unixtime - UnixTime
 * @return {Date}           - Date
 */
export const UnixToDate = (unixtime: number): Date => {
  const date = new Date(unixtime * 1000);
  return date;
};

/**
 * Dateオブジェクト同士が同じ日かどうか
 * @param {Date} date1 - Date1
 * @param {Date} date2 - Date2
 * @return {boolean}   - 同じ日かどうか
 */
export const IsSameDate = (date1: Date, date2: Date): boolean =>
  date1.toDateString() === date2.toDateString();

/**
 * Dateを文字列で取得
 * @param {Date} date - Date
 * @return {string}   - Date (ex: 2021/08/08)
 */
export const getDateString = (date: Date): string => {
  const year = date.getFullYear();
  const month = `00${date.getMonth() + 1}`.slice(-2);
  const day = `00${date.getDate()}`.slice(-2);
  return `${year}/${month}/${day}`;
};

/**
 * ｢今週｣を文字列を取得
 * @return {string} - This Week (ex: 2021/08/08-2021/08/15)
 */
export const getThisWeekString = (): string => {
  const today = new Date();
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  return `${getDateString(weekAgo)} - ${getDateString(today)}`;
};

/**
 * Dateオブジェクト同士の差分を取得
 * @param {Date} date1 - Date1
 * @param {Date} date2 - Date2
 * @return {string}    - Dateの差 (ex: 88日88時間88分)
 */
export const getDateDiffString = (date1: Date, date2: Date): string => {
  const minutesDiff = Math.ceil((date1.getTime() - date2.getTime()) / (60 * 1000));
  return `${Math.floor(minutesDiff / (24 * 60)) || "-"}日${
    Math.floor((minutesDiff / 60) % 24) || "-"
  }時間${minutesDiff % 60 || "-"}分`;
};

/**
 * 今年の年度をnumberで取得
 * @return {number} - 現在の年度 (ex: 2021)
 */
export const getCurrentYear = (): number => {
  const now = new Date();
  return now.getFullYear();
};
