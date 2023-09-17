import {   createBrowserRouter  } from "react-router-dom";
import Main from "../Layout/Main";
import HomeDemo from "../components/DemoSection/HomeDemo";
import Services from "../components/PagesSection/Services/Services1/Services";
import { Services2 } from "../components/PagesSection/Services/Services2/Services2";
import { About1 } from "../components/PagesSection/About/About1/About1";

export const router = createBrowserRouter([
    {
        path: '',
        element: <Main />,
        children:[
           {
            path: "/",
            element: <HomeDemo />
           },
           {
            path: "/services1",
            element: <Services />
           },
           {
            path: "/services2",
            element: <Services2 />
           },
             // pages About1 and About2 Section start 
           {
            path: "/about1",
            element: <About1 />
           }
           // pages About1 and About2 Section end 
        ]
    }
])

// style={{clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)'}}>