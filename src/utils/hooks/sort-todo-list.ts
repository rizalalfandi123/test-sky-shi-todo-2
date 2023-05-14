import { TTodoSort } from "@/pages/detail-activity/button-sort";
import { ITodo } from "..";

export const sortTodoList = (todos: ITodo[], sort?: TTodoSort) => {
  switch (sort) {
    case "A - Z":
      return todos.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      });

    case "Z-A":
      return todos.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        } else if (a.title < b.title) {
          return 1;
        } else {
          return 0;
        }
      });

    case "Terlama":
      return todos.sort((a, b) => {
        return a.id - b.id;
      });

    case "Terbaru":
      return todos.sort((a, b) => {
        return b.id - a.id;
      });

    case "Belum Selesai":
      return todos.sort((a) => {
        if (a.is_active === 1) {
          return -1;
        } else if (a.is_active === 0) {
          return 1;
        } else {
          return 0;
        }
      });

    default:
      return todos;
  }
};
