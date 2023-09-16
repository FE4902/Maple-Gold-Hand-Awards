import { useState, useContext } from "react";
import styled from "@emotion/styled";
import { FaHeart } from "react-icons/fa6";
import { LikeContext } from "../App";

import { CardType } from "types/types";
import Variables from "styles/Variables";

const Card = (props: CardType): JSX.Element => {
    const { id, categoryId, title, author, img } = props;
    const { likeItems, setLikeItems } = useContext(LikeContext);
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
    border-radius: ${Variables.radius.lg};
    overflow: hidden;
    transition: 0.3s;

    &:hover {
        transform: translateY(-0.25rem);
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
    min-height: 4.75rem;
    padding: 0.5rem;
`;

const Title = styled.h4`
    padding-bottom: 0.25rem;
    font-weight: ${Variables.fontWeight.semiBold};
`;

const Author = styled.p`
    font-size: ${Variables.fontSize.sm};
    opacity: 0.75;
`;

const Like = styled.button`
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    display: grid;
    place-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: ${Variables.radius.circle};
    border: 1px solid ${Variables.colors.gray};
    color: ${Variables.colors.gray};
    background-color: ${Variables.colors.white};
    transition: 0.3s;

    &:is(:hover, .active) {
        color: crimson;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.05);
    }
`;
