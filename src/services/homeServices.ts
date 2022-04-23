import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type IGStory = {
  id: number;
  name: string;
  avatar: string;
};

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  endpoints: (builder) => ({
    getIGStoies: builder.query<IGStory[], number | 'all'>({
      query: (id) => {
        if (id !== 'all') {
          return `stories/${id}`;
        }
        return 'stories';
      },
    }),
  }),
});

export const { useGetIGStoiesQuery } = homeApi;
