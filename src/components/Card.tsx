import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Variables from "styles/Variables";

const Card = () => {
    return (
        <Container>
            <a>
                <Thumbnail></Thumbnail>
                <Description>
                    <Title></Title>
                    <Author></Author>
                </Description>
            </a>
        </Container>
    );
};

export default Card;

// STYLE
const Container = styled.li`
    border: 1px solid ${Variables.colors.gray};
`;

const Thumbnail = styled.figure``;

const Description = styled.div``;

const Title = styled.h4``;

const Author = styled.p``;
