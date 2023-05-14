import { RefCallback, useRef, useCallback, useMemo, ReactNode, useState, useEffect } from "react";
import { createPopper, Options } from "@popperjs/core";
import { createPortal } from "react-dom";

export function usePopper(options?: Partial<Options>): [RefCallback<Element | null>, RefCallback<HTMLElement | null>] {
  let reference = useRef<Element | null>(null);
  let popper = useRef<HTMLElement | null>(null);

  let cleanupCallback = useRef(() => {});

  let instantiatePopper = useCallback(() => {
    if (!reference.current) return;
    if (!popper.current) return;

    if (cleanupCallback.current) cleanupCallback.current();

    cleanupCallback.current = createPopper(reference.current, popper.current, options).destroy;
  }, [reference, popper, cleanupCallback, options]);

  return useMemo(
    () => [
      (referenceDomNode) => {
        reference.current = referenceDomNode;
        instantiatePopper();
      },
      (popperDomNode) => {
        popper.current = popperDomNode;
        instantiatePopper();
      },
    ],
    [reference, popper, instantiatePopper]
  );
}

export const Portal = (props: { children: ReactNode }) => {
  let { children } = props;
  let [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return createPortal(children, document.body);
};
