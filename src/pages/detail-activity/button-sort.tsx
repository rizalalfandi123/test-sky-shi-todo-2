import { Menu, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useEffect } from "react";
import { AscDateSort, AscIcon, CheckIcon, DescDateSort, DescIcon, SortIconButton, SwapIcon } from "@/components/icons";
import { useParams } from "react-router-dom";
import { useActivitySort } from "@/utils";

export type TTodoSort = "Terbaru" | "Terlama" | "A - Z" | "Z-A" | "Belum Selesai";

interface ISortOption {
  label: TTodoSort;
  icon: ReactNode;
}

const sortMenus: ISortOption[] = [
  {
    icon: <AscDateSort className="icon" />,
    label: "Terbaru",
  },
  {
    icon: <DescDateSort className="icon" />,
    label: "Terlama",
  },
  {
    icon: <AscIcon className="icon" />,
    label: "A - Z",
  },
  {
    icon: <DescIcon className="icon" />,
    label: "Z-A",
  },
  {
    icon: <SwapIcon className="icon" />,
    label: "Belum Selesai",
  },
];

export const ButtonSort = () => {
  const { idActivity = "" } = useParams();

  const dataSort = useActivitySort((state) => state.getDataActivitySort(idActivity));

  const changeActivitySort = useActivitySort((state) => state.changeActivitySort);

  const addActivitySort = useActivitySort((state) => state.addNewActivitySort);

  useEffect(() => {
    if (!dataSort) {
      addActivitySort(idActivity);
    }
  }, []);

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button data-cy="todo-sort-button">
          <SortIconButton className="w-[54px] h-[54px]" />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            data-cy="sort-parent"
            className="absolute mt-2 w-[235px] origin-top-left divide-y divide-gray-200 rounded-md bg-white shadow-card focus:outline-none flex flex-col"
          >
            {sortMenus.map((option) => {
              return (
                <Menu.Item>
                  {() => (
                    <button
                      className="flex gap-2 items-center px-4 h-[52px] hover:bg-slate-100"
                      onClick={() => changeActivitySort({ sort: option.label, id: idActivity })}
                      data-cy="sort-selection"
                    >
                      {option.icon}

                      {option.label}

                      <div className="grow flex justify-end">
                        {option.label === dataSort && <CheckIcon className="icon" />}
                      </div>
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
