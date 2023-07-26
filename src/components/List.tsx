import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Card from "./Card";

const List = ({ items }: any) => {
    const [listItems, setListItems] = useState([]);
    const [likeItems, setLikeItems] = useState(
        JSON.parse(localStorage.getItem("likeItems") || "[]")
    );

    useEffect(() => {
        fetch(`/data/${items}.json`)
            .then((res) => res.json())
            .then((data) => {
                setListItems(data);
            });
    }, [items]);

    useEffect(() => {
        localStorage.setItem("likeItems", JSON.stringify(likeItems));
    }, [likeItems]);

    return (
        <Container>
            {listItems?.map((v: any) => (
                <Card
                    key={v.id}
                    id={v.id}
                    categoryId={v.categoryId}
                    title={v.title}
                    author={v.author}
                    img={v.img}
                    likeItems={likeItems}
                    setLikeItems={setLikeItems}
                />
            ))}
        </Container>
    );
};

export default List;

// STYLE
const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding: 16px;
`;
