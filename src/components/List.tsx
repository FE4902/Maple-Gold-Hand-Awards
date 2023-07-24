import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Card from "./Card";

const List = ({ items }: any) => {
    const [datas, setDatas] = useState();

    useEffect(() => {
        fetch(`/data/${items}.json`)
            .then((res) => res.json())
            .then((data) => setDatas(data));
    }, [items]);

    return (
        <Container>
            {datas?.map((v: any) => (
                <Card
                    key={v.id}
                    id={v.id}
                    categoryId={v.categoryId}
                    title={v.title}
                    author={v.author}
                    img={v.img}
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
