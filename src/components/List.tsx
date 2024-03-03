import { useEffect, useRef } from "react";
import styled from "@emotion/styled";

import { CardType, CardListProps } from "types/types";
import { mq } from "styles/MediaQueries";

import Card from "components/Card";

const List = ({ listItems }: CardListProps): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);

    const option = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
            console.log("Intersecting");
        }
    };

    const observer = new IntersectionObserver(callback, option);

    useEffect(() => {
        observer.observe(ref.current!);
    }, []);

    return (
        <Container>
            <>
                {listItems?.map((listItem: CardType) => (
                    <Card key={listItem.id} {...listItem} />
                ))}
                <Observer ref={ref} />
            </>
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

const Observer = styled.div`
    height: 2.5rem;
`;
