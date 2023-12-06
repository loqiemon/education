import {RouteProps} from "react-router-dom";
import {MainPage} from "@pages/MainPage";
import {AboutPageAsync} from "@pages/AboutPage";

export enum AppRoutes {
  ABOUT = "about",
  MAIN = "main",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageAsync />,
  },
};
