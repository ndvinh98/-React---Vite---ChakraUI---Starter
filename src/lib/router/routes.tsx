import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
import SearchPage from "lib/pages/search";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
