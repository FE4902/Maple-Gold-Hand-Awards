import styled from "@emotion/styled";

import { CardType, CardListProps } from "types/types";
import { mq } from "styles/MediaQueries";

import Card from "./Card";

const List = ({ listItems }: CardListProps): JSX.Element => {
    return (
        <Container>
            {listItems?.map((v: CardType) => (
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
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;
    padding: 1rem;

    ${mq[0]} {
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }

    ${mq[1]} {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
    }
`;
