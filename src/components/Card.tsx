import { useState } from "react";
import styled from "@emotion/styled";
import { FaHeart } from "react-icons/fa";

import Variables from "styles/Variables";

type CardType = {
    id: number;
    categoryId: number;
    title: string;
    author: string;
    img: string;
    likeItems: any;
    setLikeItems: any;
};

const Card = (props: CardType) => {
    const { id, categoryId, title, author, img, likeItems, setLikeItems } =
        props;
    const [like, setLike] = useState(likeItems.includes(id));

    const ToggleLike = () => {
        setLikeItems(
            like
                ? likeItems.filter((v: number) => v !== id)
                : [...likeItems, id]
        );
        setLike(!like);
    };

    return (
        <Container>
            <Link
                href={`https://maplestory.nexon.com/Promotion/2021/20210805/AwardsPoll/Out/${categoryId}/${id}/asdf`}
                target="_blank"
            >
                <Thumbnail>
                    <img src={img} loading="lazy" />
                </Thumbnail>
                <Description>
                    <Title>{title}</Title>
                    <Author>{author}</Author>
                </Description>
            </Link>
            <Like onClick={ToggleLike} className={like ? "active" : ""}>
                <FaHeart />
            </Like>
        </Container>
    );
};

export default Card;

// STYLE
const Container = styled.li`
    position: relative;
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

const Like = styled.button`
    position: absolute;
    right: 12px;
    top: 12px;
    display: grid;
    place-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid ${Variables.colors.gray};
    color: ${Variables.colors.gray};
    background-color: white;
    font-size: 14px;
    transition: 0.3s;

    &:is(:hover, .active) {
        color: crimson;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.05);
    }
`;
