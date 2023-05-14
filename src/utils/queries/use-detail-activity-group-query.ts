import type { UseQueryOptions, UseQueryResult } from "react-query";

import { useQuery } from "react-query";
import { TPriority, apiEndpoints, apiKey } from "..";
import axios from "axios";

export interface ITodo {
  id: number;
  title: string;
  is_active: number;
  priority: TPriority;
}

export interface IDetailActivityResponse {
  id: number;
  title: string;
  created_at: string;
  todo_items: ITodo[];
}

export type TUseDetailActivityQueryOptions = Omit<UseQueryOptions<IDetailActivityResponse>, "queryKey" | "queryFn">;

type TUseDetailActivityQuery = (id: string, options?: TUseDetailActivityQueryOptions) => UseQueryResult<IDetailActivityResponse>;

export const useDetailActivityQuery: TUseDetailActivityQuery = (id, options = {}) => {
  return useQuery<IDetailActivityResponse>({
    queryKey: [apiKey.activity, { idActivity: id }],
    queryFn: async () => {
      const response = await axios.get<IDetailActivityResponse>(`${apiEndpoints.activity}/${id}`);

      return response.data;
    },

    ...options,
  });
};
