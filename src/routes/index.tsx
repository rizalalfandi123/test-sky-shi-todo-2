// TODO: Component for declare all app routes

import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import PageWrapper from "@/components/page-wrapper";
import Appbar from "@/components/appbar";

const HomePage = lazy(() => import("../pages/home"));
const DetailActivity = lazy(() => import("../pages/detail-activity"));
const CreateTodo = lazy(() => import("../pages/create-todo"));
const EditTodo = lazy(() => import("../pages/edit-todo"));

export const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location.state?.backgroundLocation || location}>
        <Route path="/" element={<Appbar />}>
          <Route
            index
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />

          <Route
            path="/detail-activity/:idActivity"
            element={
              <PageWrapper>
                <DetailActivity />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>

      {location.state?.backgroundLocation && (
        <Routes>
          <Route
            path="/create-todo/:idActivity"
            element={
              <PageWrapper>
                <CreateTodo />
              </PageWrapper>
            }
          />

          <Route
            path="/edit-todo/:idActivity/:idTodo"
            element={
              <PageWrapper>
                <EditTodo />
              </PageWrapper>
            }
          />
        </Routes>
      )}
    </>
  );
};
