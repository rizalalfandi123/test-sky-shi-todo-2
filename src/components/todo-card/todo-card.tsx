import { ITodo, priorityOptions } from "@/utils";
import { DotPriority, EditIcon, TrashIcon } from "../icons";
import { ComponentProps, FunctionComponent, useMemo, useState } from "react";

interface ITodoCardProps {
  todo: ITodo;
  onChangeCheckbox: (newValue: boolean) => void;
  onClickButtonDelete: ComponentProps<"button">["onClick"];
  onClickButtonEdit: ComponentProps<"button">["onClick"];
}

export const TodoCard: FunctionComponent<ITodoCardProps> = (props) => {
  const { todo, onChangeCheckbox, onClickButtonDelete, onClickButtonEdit } = props;

  const [check, setCheck] = useState<boolean>(todo.is_active === 0);

  const priorityColor = useMemo(
    () => (priorityOptions.find((option) => option.value === todo.priority) ?? priorityOptions[0]).color,
    [todo.priority]
  );

  return (
    <div data-cy="todo-item" className="w-full flex shadow-card p-[30px] rounded-xl">
      <div className="flex grow gap-3 items-center">
        <input
          data-cy="todo-item-checkbox"
          type="checkbox"
          checked={check}
          onChange={(e) => {
            setCheck(e.target.checked);
            onChangeCheckbox(e.target.checked);
          }}
          className="w-6 h-6 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
        />

        <DotPriority data-cy="todo-item-priority-indicator" color={priorityColor} />

        <p data-cy="todo-item-title" className="text-lg font-medium">
          {todo.title}
        </p>

        <button data-cy="todo-item-edit-button" onClick={onClickButtonEdit}>
          <EditIcon className="icon" />
        </button>
      </div>

      <button data-cy="todo-item-delete-button" onClick={onClickButtonDelete}>
        <TrashIcon />
      </button>
    </div>
  );
};
