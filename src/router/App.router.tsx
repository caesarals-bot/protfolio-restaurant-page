import AdminPage from "@/admin/pages/AdminPage";
import HomePage from "@/saborpage/page/landingPage/page/HomePage";
import MenuPage from "@/saborpage/page/menu/MenuPage";
import { createBrowserRouter } from "react-router";
import SaborLayout from "@/saborpage/layout/SaborLayout";
import { FeedbackForm } from "@/saborpage/page/form/FeedbackForm";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <SaborLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "menu",
                element: <MenuPage />,
            },
            {
                path: "sugerencias",
                element: <FeedbackForm />,
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminPage />,
    },
]); 