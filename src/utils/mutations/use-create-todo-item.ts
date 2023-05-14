import type { UseMutationOptions, UseMutationResult } from "react-query";

import axios from "axios";
import { useMutation } from "react-query";
import { apiEndpoints } from "..";

export interface ICreateTodoItemResponse {
  is_active: boolean;
  created_at: string;
  updated_at: string;
  id: number;
  title: string;
  activity_group_id: string;
  priority: string;
}

export interface ICreateTodoItemBodyRequest {
  title: string;
  activity_group_id: string;
  priority: string;
}

type TUseCreateTodoItemOptions = Omit<
  UseMutationOptions<ICreateTodoItemResponse, unknown, ICreateTodoItemBodyRequest>,
  "mutationFn"
>;

type TUseCreateTodoItem = (
  options?: TUseCreateTodoItemOptions
) => UseMutationResult<ICreateTodoItemResponse, unknown, ICreateTodoItemBodyRequest>;

const email = import.meta.env.VITE_API_EMAIL;

export const useCreateTodoItem: TUseCreateTodoItem = (options = {}) => {
  return useMutation<ICreateTodoItemResponse, unknown, ICreateTodoItemBodyRequest>({
    mutationFn: async (bodyRequest) =>
      (await axios.post<ICreateTodoItemResponse>(apiEndpoints.todoItem, { ...bodyRequest, email, is_active: true})).data,
    ...options,
  });
};
