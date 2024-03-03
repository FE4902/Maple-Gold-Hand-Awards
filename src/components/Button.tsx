import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ButtonType } from "types/types";
import Variables from "styles/Variables";

const Button = (props: ButtonType): JSX.Element => {
    const { as, to, color = "default", children, onClick } = props;

    return (
        <StyledButton as={as} to={to} color={color} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;

// STYLE
const colorStyles = {
    default: css`
        color: ${Variables.colors.dark};

        &:not(.active):hover {
            background-color: ${Variables.colors.light};
        }

        &.active {
            color: ${Variables.colors.light};
            background-color: ${Variables.colors.primary};
        }
    `,
    primary: css`
        color: ${Variables.colors.light};
        background-color: ${Variables.colors.primary};

        &.active {
            color: ${Variables.colors.light};
            background-color: ${Variables.colors.primary};
        }
    `,
    gray: css`
        color: ${Variables.colors.dark};
        background-color: ${Variables.colors.gray};

        &.active {
            color: ${Variables.colors.light};
            background-color: ${Variables.colors.primary};
        }
    `,
    dark: css`
        color: ${Variables.colors.light};
        background-color: ${Variables.colors.dark};

        &.active {
            color: ${Variables.colors.light};
            background-color: ${Variables.colors.primary};
        }
    `,
};

const StyledButton = styled.button<ButtonType>`
    padding: 0.5rem 0.75rem;
    border-radius: ${Variables.radius.md};

    &:not(.active):hover {
        opacity: 0.75;
    }

    ${(props) => colorStyles[props.color || "default"]}
`;
