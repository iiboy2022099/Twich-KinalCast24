import { DashboardPage } from "./pages/dashboard/DashboardPage.jsx";
import { AuthPage } from "./pages/auth/AuthPage.jsx";


const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>}
]

export default routes;