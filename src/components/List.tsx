import styled from "@emotion/styled";

import Card from "./Card";

type CardType = {
    id: number;
    categoryId: number;
    title: string;
    author: string;
    img: string;
};

export type CardListProps = {
    listItems?: CardType[] | undefined;
};

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
`;
