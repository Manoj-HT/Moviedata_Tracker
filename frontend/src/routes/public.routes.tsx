import { Navigate, RouteObject } from "react-router-dom";
import { PageDoesNotExist } from "../pages/PageDoesNotExist";
import Login from "../pages/Login";

let routes = [
    {
        path : 'login2',
        element : <Login />
    },
    {
        path : 'login1',
        element : <Login />
    },
    {
        path : 'login',
        element : <Login />
    },
    {
        path : '',
        element : <Navigate to='/login' />
    },
    {
        path : '*',
        element : <PageDoesNotExist />
    }
] as RouteObject[];

export const public_routes = () => {
    for(let route of routes){
        route = {
            ...route,
            errorElement : <PageDoesNotExist />
        }
    }
    return routes
};
