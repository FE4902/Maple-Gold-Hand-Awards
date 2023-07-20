import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";

import Layout from "./layout/Layout";

import Cloth from "./pages/Cloth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Cloth />,
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
