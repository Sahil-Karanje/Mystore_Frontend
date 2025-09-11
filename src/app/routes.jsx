import BecomeSeller from "../features/admin/components/BecomeSeller/BecomeSeller";
import Admin from "../features/admin/pages/Admin";
import Login from "../features/auth/pages/login/Login";
import Register from "../features/auth/pages/register/Register";
import Cart from "../features/cart/Cart";
import Home from "../features/home/pages/Home";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/account",
        element: <Admin />
    },
    {
        path: "/becomeSeller",
        element: <BecomeSeller />
    }
];

export default routes;