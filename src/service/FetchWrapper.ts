import fetch from "node-fetch";
import { CustomError } from "types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isServer = !(process as any).browser;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkStatus = (res, mock): any => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }
  const error: CustomError = {
    status: res.status,
    name: "",
    message: "",
    body: mock ? { status: res.status } : res.json(),
  };
  throw error;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const extractBodyJson = (res): any => (res.status !== 204 ? res.json() : {});

export const fetchWrapper = async <T>(props: {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
  external?: boolean;
  mock?: boolean;
}): Promise<T> => {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: "application/json",
  };
  if (props.options.contentType === "json") {
    headers["Content-Type"] = "application/json; charset=utf-8";
    headers.Accept = "application/json";
  }

  try {
    let res;
    let baseUrl;
    if (props.external) {
      baseUrl = "";
    } else if (props.mock) {
      baseUrl = process.env.internalApiBaseUrl;
    } else {
      baseUrl = process.env.apiBaseUrl;
    }
    if (isServer) {
      res = await fetch(`${baseUrl}${props.path}`, {
        headers,
        mode: "cors",
        ...props.options,
      });
    } else {
      res = await fetch(`${baseUrl}${props.path}`, {
        headers,
        mode: "cors",
        ...props.options,
      });
    }
    const checkedRes = checkStatus(res, props.mock);
    const body: T = extractBodyJson(checkedRes);
    return body;
  } catch (e) {
    if (e instanceof TypeError) {
      console.error(e);
      const error: CustomError = {
        name: "TypeError",
        message: "TypeError",
      };
      throw error;
    } else {
      const errorBody = await e.body;
      console.error(errorBody);
      throw errorBody;
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const json2query = (json: { [key: string]: any }): string => {
  if (json) {
    let queryString = "?";
    Object.keys(json).forEach((key) => {
      queryString += `${key}=${json[key]}&`;
    });
    return queryString;
  }
  return "";
};

export const get = async <T>(path: string, query = null, mock = false): Promise<T> => {
  const queryString = json2query(query);
  const res = await fetchWrapper<T>({
    path: `${path}${queryString}`,
    options: { method: "GET" },
    mock,
  });
  return res;
};

export const post = async <T>(path: string, data = {}, mock = false): Promise<T> => {
  const res = await fetchWrapper<T>({
    path: `${path}`,
    options: {
      method: "POST",
      body: JSON.stringify(data),
      contentType: "json",
    },
    mock,
  });
  return res;
};

export const put = async <T>(path: string, data = {}, mock = false): Promise<T> => {
  const res = await fetchWrapper<T>({
    path: `${path}`,
    options: {
      method: "PUT",
      body: JSON.stringify(data),
      contentType: "json",
    },
    mock,
  });
  return res;
};

export const del = async <T>(path: string, data = {}, mock = false): Promise<T> => {
  const res = await fetchWrapper<T>({
    path: `${path}`,
    options: {
      method: "DELETE",
      body: JSON.stringify(data),
      contentType: "json",
    },
    mock,
  });
  return res;
};
