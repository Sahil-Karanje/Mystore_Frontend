import Login from "../features/auth/pages/login/Login";
import Register from "../features/auth/pages/register/Register";
import Home from "../features/home/pages/Home";

const routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
];

export default routes;