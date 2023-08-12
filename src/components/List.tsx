import styled from "@emotion/styled";

import Card from "./Card";
import { CardType, CardListProps } from "types/types";
import { breakpoints, mq } from "styles/MediaQueries";

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
    gap: 24px;
    padding: 16px;

    ${mq[0]} {
        gap: 16px;
        grid-template-columns: repeat(4, 1fr);
    }

    ${mq[1]} {
        gap: 12px;
        grid-template-columns: repeat(2, 1fr);
    }
`;
