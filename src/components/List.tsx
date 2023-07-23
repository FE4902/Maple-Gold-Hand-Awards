import styled from "@emotion/styled";
import cloths from "../data/cloth.json";

import Card from "./Card";

const List = () => {
    return (
        <Container>
            {cloths.map((v) => (
                <Card
                    key={v.id}
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
