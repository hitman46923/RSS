import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




interface Person {
  name: string;
  height: string;
}



interface PeopleResponse {
  results: Person[];

}

export const peopleApi = createApi({
    reducerPath: 'peopleApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.py4e.com/api/people/' }),
    endpoints: (builder) => ({
      getPeople: builder.query<PeopleResponse, void>({
        query: () => 'people/',
      }),
      getPersonById: builder.query <Person, string> ({
        query: (id) => `people/${id}`,
      }),
    }),
  })
  
  export const { useGetPeopleQuery, useGetPersonByIdQuery } = peopleApi