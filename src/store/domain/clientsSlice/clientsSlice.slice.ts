import { createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";
import { transformClientList } from "../../utils/mappers";

export const PAYER_CLIENTS_API_PATH =
  "lwhiteley/b01cf0964e19704df06fccf44d0c3c4d/raw/580a0aa9675985674dd1a70ffa799a4288c94bb3/guests.json";

export const clientsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getClients: builder.query<number[], void>({
      query: () => PAYER_CLIENTS_API_PATH,
      transformResponse: ({ clients }: { clients: number[] }) => clients,
    }),
  }),
});

export const domainSelectClients = clientsSlice.endpoints.getClients.select();

export const selectClients = createSelector(domainSelectClients, ({ data }) =>
  transformClientList(data)
);

export const { useGetClientsQuery } = clientsSlice;
