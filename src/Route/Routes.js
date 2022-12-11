import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contract from "../Header/Contract/Contract";
import Exprinces from "../Header/Exprinces/Exprinces";
import Projects from "../Header/Projects/Projects";
import Pro01 from "../Header/Projects/Projects01/Pro01";
import Pro02 from "../Header/Projects/Projects02/Pro02";
import Pro03 from "../Header/Projects/Projects03/Pro03";
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
            {

                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {

                path: '/about',
                element: <About></About>
            },
            {

                path: '/pro1',
                element: <Pro01></Pro01>
            },
            {

                path: '/pro2',
                element: <Pro02></Pro02>
            },
            {

                path: '/pro3',
                element: <Pro03></Pro03>
            },

        ]
    }
]);
export default router;

