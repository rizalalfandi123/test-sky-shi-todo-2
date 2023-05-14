import Button from "@/components/button";
import { BackIcon, EditIcon, PlusIcon } from "@/components/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ButtonSort } from "./button-sort";
import { useEditActivity } from "@/utils";

export const DetailActivityTitle = ({ initialTitle }: { initialTitle: string }) => {
  const navigate = useNavigate();

  const location = useLocation();

  const { idActivity = "" } = useParams();

  // TODO: Conditional between edit and only display title
  const [isEditTitle, setIsEditTitle] = useState<boolean>(false);

  // TODO: Store input value when change title
  const [valueTitle, setValueTitle] = useState<string>(initialTitle);

  // TODO: Sync response with local state
  useEffect(() => {
    setValueTitle(initialTitle);
  }, [initialTitle]);

  // TODO: Hooks to edit title
  const { mutateAsync: editTitle } = useEditActivity(idActivity, {
    onSuccess(res) {
      setValueTitle(res.title);
    },
  });

  const handleOnBlurTitle = async () => {
    await editTitle({ title: valueTitle });

    setIsEditTitle(false);
  };

  return (
    <section className="py-[43px] flex justify-between gap-8 w-full">
      <div className="w-fit flex gap-2">
        <button data-cy="todo-back-button" onClick={() => navigate(-1)}>
          <BackIcon className="w-8 h-8" />
        </button>

        {isEditTitle ? (
          <input
            autoFocus
            type="text"
            className="page-title w-[60%] p-0 ring-0 border-none focus:ring-0 focus:border-none focus:p-0"
            value={valueTitle}
            onChange={(e) => setValueTitle(e.target.value)}
            onBlur={handleOnBlurTitle}
          />
        ) : (
          <p data-cy="todo-title" className="page-title p-1" onClick={() => setIsEditTitle(true)}>
            {valueTitle}
          </p>
        )}

        <button
          className="px-2"
          data-cy="todo-title-edit-button"
          onClick={() => {
            setIsEditTitle(true);
          }}
        >
          <EditIcon className="icon" />
        </button>
      </div>

      <div className="flex gap-2">
        <ButtonSort />

        <Button
          className="w-[159px]"
          data-cy="todo-add-button"
          onClick={() =>
            navigate(`/create-todo/${idActivity}`, {
              state: {
                backgroundLocation: location,
              },
            })
          }
          startIcon={<PlusIcon className="icon" />}
        >
          Tambah
        </Button>
      </div>
    </section>
  );
};
