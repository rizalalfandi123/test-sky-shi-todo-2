import TodoCard from "@/components/todo-card";
import {
  ITodo,
  apiEndpoints,
  apiKey,
  priorityOptions,
  queryClient,
  useAlertDelete,
  useEditTodoItem,
  useNotification,
} from "@/utils";
import { FunctionComponent } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const openAlertDelete = useAlertDelete.getState().open;

const openNotification = useNotification.getState().open;

interface IDetailActivityBodyProps {
  todos: ITodo[];
}

export const DetailActivityBody: FunctionComponent<IDetailActivityBodyProps> = (props) => {
  const navigate = useNavigate();

  const location = useLocation();

  const { idActivity = "" } = useParams();

  const { mutateAsync: editTodo } = useEditTodoItem();

  const handleClickDelete = (todo: ITodo) => () => {
    openAlertDelete({
      message: "Apakah anda yakin menghapus item",
      dataName: todo.title,
      deleteUrl: `${apiEndpoints.todoItem}/${todo.id}`,
      actionAfterDelete: () => {
        queryClient.invalidateQueries([apiKey.activity, { idActivity }]);

        openNotification({ message: "Todo berhasil dihapus" });
      },
    });
  };

  const handleChangeCheckbox = (todo: ITodo) => async (newValue: boolean) => {
    await editTodo({ id: todo.id, is_active: newValue ? 0 : 1 });
  };

  const handleClickButtonEdit = (todo: ITodo) => () => {
    navigate(`/edit-todo/${idActivity}/${todo.id}`, {
      state: {
        backgroundLocation: location,
        defaultValuesTodoForm: {
          title: todo.title,
          priority: priorityOptions.find((option) => option.value === todo.priority) ?? priorityOptions[0],
        },
      },
    });
  };

  const handleClickAddTodo = () => {
    navigate(`/create-todo/${idActivity}`, {
      state: {
        backgroundLocation: location,
      },
    });
  };

  if (props.todos.length <= 0) {
    return <img onClick={handleClickAddTodo} data-cy="todo-empty-state" src="/empty-activity.svg" className="w-[767px] h-[490px]" />;
  }

  return (
    <div className="w-full">
      {props.todos.map((todo) => {
        return (
          <TodoCard
            key={todo.id}
            onClickButtonDelete={handleClickDelete(todo)}
            onChangeCheckbox={handleChangeCheckbox(todo)}
            onClickButtonEdit={handleClickButtonEdit(todo)}
            todo={todo}
          />
        );
      })}
    </div>
  );
};
