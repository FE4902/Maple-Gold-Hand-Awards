import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";

import Layout from "./layout/Layout";

import Cloth from "./pages/Cloth";
import Eye from "./pages/Eye";
import Hair from "./pages/Hair";
import Pet from "./pages/Pet";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Cloth />,
            },
            {
                path: "/cloth",
                element: <Cloth />,
            },
            {
                path: "/eye",
                element: <Eye />,
            },
            {
                path: "/hair",
                element: <Hair />,
            },
            {
                path: "/pet",
                element: <Pet />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
