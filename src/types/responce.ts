export enum ErrorEnum {
  NoError = 0,
  Validation = 400,
  UnAuthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  Api = 500,
}

export type CustomError = Error & {
  status?: number;
  body?: { [key: string]: unknown };
};

export type Res<T> = {
  loading: boolean;
  data: T;
  error?: CustomError;
};
