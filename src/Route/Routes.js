import { createBrowserRouter } from "react-router-dom";
import Contract from "../Header/Contract/Contract";
import Exprinces from "../Header/Exprinces/Exprinces";
import Projects from "../Header/Projects/Projects";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([


    {

        path: '/',
        element: <Main></Main>,
        children: [


            {

                path: '/',
                element: <Home></Home>
            },
            {

                path: '/projects',
                element: <Projects></Projects>
            },
            {

                path: '/experience',
                element: <Exprinces></Exprinces>
            },
            {

                path: '/contact',
                element: <Contract></Contract>
            },

        ]
    }
]);
export default router;

