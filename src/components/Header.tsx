import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import Variables from "styles/Variables";

import Button from "./Button";
import { NavButtonType } from "types/types";

const left: NavButtonType[] = [
    { children: "의상", navigate: "/" },
    { children: "성형", navigate: "/eye" },
    { children: "헤어", navigate: "/hair" },
    { children: "펫", navigate: "/pet" },
];

const right: NavButtonType[] = [
    { children: "검색", navigate: "/search", color: "gray" },
    { children: "좋아요", navigate: "/like", color: "primary" },
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
    height: 64px;
    padding: 0 16px;
    border-bottom: 1px solid ${Variables.colors.gray};
    background-color: white;
`;

const Menu = styled.ul`
    display: flex;
    gap: 8px;
`;
