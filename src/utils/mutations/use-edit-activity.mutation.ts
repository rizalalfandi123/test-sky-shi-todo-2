import type { UseMutationOptions, UseMutationResult } from "react-query";

import axios from "axios";
import { useMutation } from "react-query";
import { apiEndpoints } from "..";

export interface IEditActivityResponse {
  created_at: string;
  updated_at: string;
  id: number;
  title: string;
  email: string;
}

export interface IEditActivityBodyRequest {
  title: string;
}

type TUseEditActivityOptions = Omit<
  UseMutationOptions<IEditActivityResponse, unknown, IEditActivityBodyRequest>,
  "mutationFn"
>;

type TUseEditActivity = (
  id: string,
  options?: TUseEditActivityOptions
) => UseMutationResult<IEditActivityResponse, unknown, IEditActivityBodyRequest>;

export const useEditActivity: TUseEditActivity = (id, options = {}) => {
  return useMutation<IEditActivityResponse, unknown, IEditActivityBodyRequest>({
    mutationFn: async (bodyRequest) => {
      const res = await axios.patch<IEditActivityResponse>(`${apiEndpoints.activity}/${id}`, bodyRequest);
      return res.data;
    },
    ...options,
  });
};
