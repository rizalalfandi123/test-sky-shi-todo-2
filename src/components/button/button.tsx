import { ComponentProps, FunctionComponent, ReactNode, useMemo } from "react";
import { LoadingCircular } from "../icons";
import clsx from "clsx";

export interface IButtonProps extends ComponentProps<"button"> {
  variant?: "normal" | "error";
  startIcon?: ReactNode;
  isLoading?: boolean;
}

type TButton = FunctionComponent<IButtonProps>;

export const Button: TButton = (props) => {
  const { variant = "normal", className: customClassname = "", children, startIcon = null, isLoading, ...buttonProps } = props;

  const defaultClassname = "transition-all text-white h-[54px] rounded-[45px] text-[16px] font-[600] px-6 disabled:bg-slate-300";

  const className = useMemo(
    () =>
      clsx(
        defaultClassname,
        { [`bg-primary`]: variant === "normal" },
        { [`bg-error`]: variant === "error" },
        { [`flex justify-between items-center`]: startIcon !== null },
        { [customClassname]: true },
      ),
    [variant, buttonProps.disabled]
  );


  return (
    <button className={className} {...buttonProps}>
      {isLoading ? (
        <div className="w-full flex justify-center items-center">
          <LoadingCircular />
        </div>
      ) : (
        <>
          {startIcon}
          {children}
        </>
      )}
    </button>
  );
};
