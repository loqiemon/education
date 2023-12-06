import React, {FunctionComponent, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "@pages/AboutPage";
import {routeConfig} from "@shared/config/routeConfig/routeConfig";

interface OwnProps {}

type Props = OwnProps;

const AppRouter: FunctionComponent<Props> = props => {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          {Object.values(routeConfig).map(({element, path}) => (
            <Route
              key={path}
              path={path}
              element={<div className="page-wrapper">{element}</div>}
            />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export {AppRouter};
