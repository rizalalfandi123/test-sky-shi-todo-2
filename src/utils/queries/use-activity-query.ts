import type { UseQueryOptions, UseQueryResult } from "react-query";

import { useQuery } from "react-query";
import { apiEndpoints, apiKey } from "..";
import axios from "axios";

export interface IPaginationResponse {
  total: number;
  limit: number;
  skip: number;
}

export interface IActivity {
  id: number;
  title: string;
  created_at: string;
}

export interface IListActivityResponse extends IPaginationResponse {
  data: IActivity[];
}

export type TUseActivityQueryOptions = Omit<UseQueryOptions<IListActivityResponse>, "queryKey" | "queryFn">;

type TUseActivityQuery = (options?: TUseActivityQueryOptions) => UseQueryResult<IListActivityResponse>;

const email = import.meta.env.VITE_API_EMAIL;

export const useActivityQuery: TUseActivityQuery = (options = {}) => {
  return useQuery<IListActivityResponse>({
    queryKey: [apiKey.activity],
    queryFn: async () => {
      const response = await axios.get<IListActivityResponse>(`${apiEndpoints.activity}?email=${email}`);

      return response.data;
    },

    ...options,
  });
};
