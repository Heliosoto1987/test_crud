import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Users } from "../types/users";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9090/" }),
  endpoints: (builder) => ({
    getUsers: builder.query<Users[], void>({
      query: () => ({
        url: `/users`,
      }),
    }),
    createUser: builder.mutation({
      query: ({ name, lastName, age, email }) => ({
        method: "POST",
        url: `/users`,
        body: {
          name,
          lastName,
          age,
          email,
        },
      }),
    }),
    editUser: builder.mutation({
      query: ({ name, lastName, age, email, id }) => ({
        method: "PUT",
        url: `/users/${id}`,
        body: {
          name,
          lastName,
          age,
          email,
        },
      }),
    }),
    userDelete: builder.mutation({
      query: ({ id }) => ({
        method: "DELETE",
        url: `/users/${id}`,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUserDeleteMutation,
  useEditUserMutation,
} = usersApi;
