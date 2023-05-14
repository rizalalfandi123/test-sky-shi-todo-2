import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNotification } from "@/utils";
import { NotionIcon } from "../icons";

const handleCloseModal = useNotification.getState().close;

export const Notification = () => {
  const dataNotification = useNotification((state) => state.data);

  return (
    <Transition appear show={dataNotification !== null} as={Fragment}>
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
                <div data-cy="modal-information" className="flex px-[27px] py-[17px] gap-3">
                  <NotionIcon className="icon" data-cy="modal-information-icon" />
                  <p data-cy="modal-information-title">{dataNotification?.message}</p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
