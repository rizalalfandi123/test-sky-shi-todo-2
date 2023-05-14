import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ITodoForm, TodoForm } from "@/form";
import { Button } from "@/components/button/button";
import { apiKey, queryClient, useEditTodoItem } from "@/utils";
import { CloseIcon } from "@/components/icons";

export const EditTodo = () => {
  const { idActivity = "", idTodo = "" } = useParams();

  const navigate = useNavigate();

  const defaultValues = useLocation().state["defaultValuesTodoForm"] as ITodoForm;

  const { mutateAsync: editTodo, isLoading } = useEditTodoItem();

  const [form, setFom] = useState<ITodoForm>(defaultValues);

  const disabledSubmitButton = !Boolean(form.title);

  const closeModal = () => {
    navigate(-1);
  };

  const handleEditTodo = async () => {
    await editTodo({ id: Number(idTodo), priority: form.priority.value, title: form.title });
    queryClient.invalidateQueries([apiKey.activity, { idActivity }]);
    closeModal();
  };

  return (
    <>
      <Transition appear show as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="eases-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full divide-y max-w-[830px] min-h-[403px] flex flex-col transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="div" className="relative px-[17px] py-[20px] leading-6 font-semibold">
                    <h3 className="text-lg">Edit List Item</h3>

                    <button className="absolute right-3 top-3" onClick={closeModal}>
                      <CloseIcon className="icon" />
                    </button>
                  </Dialog.Title>

                  <TodoForm controller={[form, setFom]} />

                  <div className="flex w-full justify-end items-center px-[17px] py-[20px]">
                    <Button
                      disabled={disabledSubmitButton}
                      className="w-[150px]"
                      isLoading={isLoading}
                      onClick={handleEditTodo}
                    >
                      Submit
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
