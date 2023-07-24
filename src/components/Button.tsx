import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Variables from "styles/Variables";

type ButtonType = {
    color?: "default" | "primary" | "gray";
    children: string;
    onClick?: () => void;
};

const Button = (props: ButtonType) => {
    const { color = "default", children, onClick } = props;

    return (
        <StyledButton color={color} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;

// STYLE
const colorStyles = {
    default: css`
        color: black;

        &:hover {
            background-color: #f5f5f5;
        }
    `,
    primary: css`
        color: white;
        background-color: ${Variables.colors.primary};
    `,
    gray: css`
        color: black;
        background-color: ${Variables.colors.gray};
    `,
};

const StyledButton = styled.button<ButtonType>`
    padding: 8px 12px;
    border-radius: 4px;

    &:hover {
        opacity: 0.75;
    }

    ${(props) => colorStyles[props.color || "default"]}
`;
