import Home from "./pages/Home";
import Movies from "./pages/Movies";
import User from "./pages/User";
import Users from "./pages/Users";
import LoginForm from "./components/main/LoginForm";

export default [
    {
        path: "/",
        component: Home,
        needsAuth: false
    },
    {
        path: "/movies",
        component: Movies,
        needsAuth: true
    },
    {
        path: "/users",
        component: Users,
        needsAuth: true
    },
    {
        path: "/users/:id",
        component: User,
        needsAuth: true
    },
    {
        path: "/login",
        component: LoginForm,
        needsAuth: true
    }
];
