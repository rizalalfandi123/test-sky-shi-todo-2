import { Dispatch, SetStateAction } from "react";
import { Listbox, Portal, Transition } from "@headlessui/react";
import { CheckIcon, DotPriority } from "@/components/icons";
import { usePopper } from "@/utils/hooks/use-popper";
import clsx from "clsx";
import { IPriorityOption, priorityOptions } from "@/utils";

export interface ITodoForm {
  title: string;
  priority: IPriorityOption;
}

interface ITodoFormProps {
  controller: [ITodoForm, Dispatch<SetStateAction<ITodoForm>>];
}

export const TodoForm = ({ controller }: ITodoFormProps) => {
  const [form, setForm] = controller;

  let [trigger, container] = usePopper({
    placement: "bottom-end",
    strategy: "fixed",
    modifiers: [{ name: "offset", options: { offset: [18, 10] } }],
  });

  return (
    <form className="w-full py-8 px-5 flex flex-col gap-6">
      <label className="block">
        <span className="font-semibold text-xs">NAMA LIST ITEM</span>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm((prevValue) => ({ ...prevValue, title: e.target.value }))}
          className="mt-2 block w-full h-[52px] rounded-md border-gray-500 shadow-sm focus:border-primary focus:ring focus:ring-primary"
        />
      </label>

      <div>
        <span className="font-semibold text-xs">PRIORITY</span>

        <Listbox
          as="div"
          value={form.priority}
          onChange={(newValue) => setForm((prevValue) => ({ ...prevValue, priority: newValue }))}
        >
          <div className="relative mt-2">
            <Listbox.Button
              ref={trigger}
              className="h-[52px] w-full max-w-[225px] flex gap-2 items-center px-2 py-[14px] border rounded-md border-gray-500"
            >
              <DotPriority color={form.priority.color} />
              <span className="block truncate">{form.priority.label}</span>
            </Listbox.Button>

            <Transition as="div" leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Portal>
                <Listbox.Options
                  ref={container}
                  className="absolute mt-1 divide-y w-[205px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  {priorityOptions.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        clsx("relative cursor-default select-none p-[14px]", { ["bg-slate-100"]: active })
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <div className="flex gap-2 items-center">
                            <DotPriority color={person.color} />
                            <span className="block truncate">{person.label}</span>
                          </div>

                          {selected && (
                            <span className="absolute inset-y-0 right-2 flex items-center pl-3">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Portal>
            </Transition>
          </div>
        </Listbox>
      </div>
    </form>
  );
};
