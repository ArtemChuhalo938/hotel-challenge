import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const serviceURL = "https://gist.github.com/";

export const ROOT = "root";

export const apiSlice = createApi({
  reducerPath: ROOT,
  baseQuery: fetchBaseQuery({
    baseUrl: serviceURL,
  }),
  endpoints: () => ({}),
});

export const { middleware } = apiSlice;
