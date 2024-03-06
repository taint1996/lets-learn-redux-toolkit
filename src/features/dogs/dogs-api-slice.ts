import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY = "cbfb51a2-84b6-4025-a3a2-ed8616edf311";

interface Bread {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(buider) {
    return {
      fetchBreads: buider.query<Bread[], number | void>({
        query(limit = 10) {
          return `/bread?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreadsQuery } = apiSlice
