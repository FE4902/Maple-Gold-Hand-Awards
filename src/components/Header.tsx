import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import { NavButtonType } from "types/types";

import Variables from "styles/Variables";

import Button from "./Button";

const left: NavButtonType[] = [
    { children: "의상", navigate: "/" },
    { children: "성형", navigate: "/eye" },
    { children: "헤어", navigate: "/hair" },
    { children: "펫", navigate: "/pet" },
];

const right: NavButtonType[] = [
    { children: "검색", navigate: "/search", color: "gray" },
    { children: "좋아요", navigate: "/like", color: "dark" },
];

const Header = (): JSX.Element => {

    return (
        <Container>
            <Menu>
                {left.map((v, i) => (
                    <Button
                        key={i}
                        as={NavLink}
                        to={v.navigate}
                        children={v.children}
                    />
                ))}
            </Menu>
            <Menu>
                {right.map((v, i) => (
                    <Button
                        key={i}
                        as={NavLink}
                        to={v.navigate}
                        children={v.children}
                        color={v.color}
                    />
                ))}
            </Menu>
        </Container>
    );
};

export default Header;

// STYLE
const Container = styled.header`
    z-index: 1;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    border-bottom: 1px solid ${Variables.colors.gray};
    background-color: ${Variables.colors.white};
`;

const Menu = styled.ul`
    display: flex;
    gap: 0.5rem;
`;