import styled from "@emotion/styled";

import useInfiniteScroll from "hooks/useInfiniteScroll";
import { CardType, CardListProps } from "types/types";
import { mq } from "styles/MediaQueries";

import Card from "components/Card";

const List = ({ listItems }: any): JSX.Element => {
    const { items, observeRef } = useInfiniteScroll(listItems);
    
    return (
        <>
            <Container>
                {items?.map((item: CardType) => (
                    <Card key={item.id} {...item} />
                ))}
            </Container>
            <Observer ref={observeRef} />
        </>
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

const Observer = styled.div`
    height: 2.5rem;
`;
