import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { WarningIcon } from "../icons";
import { Button } from "../button/button";
import { useAlertDelete, useDeleteMutation } from "@/utils";

const handleCloseModal = useAlertDelete.getState().close;

export const AlertDelete = () => {
  const { mutateAsync, isLoading } = useDeleteMutation();

  const dataAlert = useAlertDelete((state) => state.data);

  const handleClickDelete = async () => {
    if (dataAlert) {
      await mutateAsync(dataAlert.deleteUrl);

      if (dataAlert.actionAfterDelete) {
        dataAlert.actionAfterDelete();
      }
    }

    handleCloseModal();
  };

  return (
    <Transition appear show={dataAlert !== null} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
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
              <Dialog.Panel
                data-cy="modal-delete-icon"
                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all"
              >
                <div data-cy="modal-delete" className="h-[355px] px-[58px] py-[43px] flex flex-col justify-between">
                  <div className="w-full flex items-center justify-center">
                    <WarningIcon data-cy="modal-delete-icon" className="w-[62px] h-[62px]" />
                  </div>

                  <p data-cy="modal-delete-title" className="text-lg font-medium">
                    {dataAlert?.message} "<span className="font-bold">{dataAlert?.dataName}</span>" ?{" "}
                  </p>

                  <div className="w-full flex justify-evenly">
                    <Button data-cy="modal-delete-cancel-button" className="w-[150px]" onClick={handleCloseModal}>
                      Batal
                    </Button>

                    <Button
                      data-cy="modal-delete-confirm-button"
                      isLoading={isLoading}
                      className="w-[150px]"
                      variant="error"
                      onClick={handleClickDelete}
                    >
                      Hapus
                    </Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
