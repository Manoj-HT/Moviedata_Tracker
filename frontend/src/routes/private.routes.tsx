import { RouteObject } from "react-router-dom";
import { AuthGuard } from "../guards/AuthGuard";
import Statistics from "../pages/Statistics";

let routes = [
  {
    path : 'statistics',
    element : <Statistics />
  }
] as RouteObject[];

export const private_routes = () => {
  for (let route of routes) {
    let current = route;
    route = {
      ...route,
      element : AuthGuard({children : current.element}),
      errorElement : <div>Something went wrong.</div>
    }
  }
  return routes;
};


