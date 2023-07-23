import styled from "@emotion/styled";

import Variables from "styles/Variables";

type CardType = {
    id: number;
    categoryId: number;
    title: string;
    author: string;
    img: string;
};

const Card = (props: CardType) => {
    const { id, categoryId, title, author, img } = props;

    return (
        <Container>
            <Link
                href={`https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/${categoryId}/${id}/asdf`}
                target="_blank"
            >
                <Thumbnail>
                    <img src={img} />
                </Thumbnail>
                <Description>
                    <Title>{title}</Title>
                    <Author>{author}</Author>
                </Description>
            </Link>
        </Container>
    );
};

export default Card;

// STYLE
const Container = styled.li`
    border: 1px solid ${Variables.colors.gray};
    border-radius: 8px;
    overflow: hidden;
    transition: 0.3s;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.05);
    }
`;

const Link = styled.a``;

const Thumbnail = styled.figure`
    display: grid;
    place-content: center;
    aspect-ratio: 1 / 1;
`;

const Description = styled.div`
    padding: 8px;
    min-height: 76px;
`;

const Title = styled.h4`
    padding-bottom: 4px;
    font-weight: 600;
`;

const Author = styled.p`
    font-size: 14px;
    opacity: 0.75;
`;
