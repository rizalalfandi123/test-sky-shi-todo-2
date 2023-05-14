import type { UseMutationOptions, UseMutationResult } from "react-query";

import axios from "axios";
import { useMutation } from "react-query";
import { ITodo, apiEndpoints } from "..";

export interface IEditTodoItemResponse {
  id: number;
  activity_group_id: number;
  title: string;
  is_active: 1 | 2;
  priority: string;
  created_at: string;
  updated_at: string;
}

export type TEditTodoItemBodyRequest = Partial<ITodo>;

type TUseEditTodoItemOptions = Omit<UseMutationOptions<IEditTodoItemResponse, unknown, TEditTodoItemBodyRequest>, "mutationFn">;

type TUseEditTodoItem = (
  options?: TUseEditTodoItemOptions
) => UseMutationResult<IEditTodoItemResponse, unknown, TEditTodoItemBodyRequest>;

export const useEditTodoItem: TUseEditTodoItem = (options = {}) => {
  return useMutation<IEditTodoItemResponse, unknown, TEditTodoItemBodyRequest>({
    mutationFn: async ({ id, ...bodyRequest }) => {
      const response = await axios.patch<IEditTodoItemResponse>(`${apiEndpoints.todoItem}/${id}`, bodyRequest);

      return response.data;
    },
    ...options,
  });
};
