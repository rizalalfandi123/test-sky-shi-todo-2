import { Outlet } from "react-router-dom";

export const Appbar = () => {
  return (
    <>
      <header className="h-[105px] bg-primary flex items-center px-2" data-cy="header-background">
        <div className="w-[1000px] m-auto">
          <h1 className="text-white font-[700] text-[24px]" data-cy="header-title">
            TO DO LIST APP
          </h1>
        </div>
      </header>
      <main className="m-auto w-full max-w-[1000px] px-2">
        <Outlet />
      </main>
    </>
  );
};
