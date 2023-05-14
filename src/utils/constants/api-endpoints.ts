const host = import.meta.env.VITE_API_BASE_URL;

export const apiEndpoints = {
  activity: `${host}/activity-groups`,
  todoItem: `${host}/todo-items`
};
