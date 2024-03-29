import { createContext, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";

import Layout from "./layout/Layout";

import Cloth from "./pages/Cloth";
import Eye from "./pages/Eye";
import Hair from "./pages/Hair";
import Pet from "./pages/Pet";
import Search from "./pages/Search";
import Like from "./pages/Like";

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
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/like",
                element: <Like />,
            },
        ],
    },
]);

export const LikeContext = createContext<any>([]);

function App() {
    const [likeItems, setLikeItems] = useState(
        JSON.parse(localStorage.getItem("likeItems") || "[]")
    );

    useEffect(() => {
        localStorage.setItem("likeItems", JSON.stringify(likeItems));
    }, [likeItems]);

    return (
        <LikeContext.Provider value={{ likeItems, setLikeItems }}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </LikeContext.Provider>
    );
}

export default App;
