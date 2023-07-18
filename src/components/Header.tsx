import styled from "@emotion/styled";
import Variables from "styles/Variables";

import Button from "./Button";

const Header = () => {
    return (
        <Container>
            <Menu>
                <Button children="헤어" />
                <Button children="성형" />
                <Button children="의상" />
                <Button children="펫" />
            </Menu>
            <Menu>
                <Button color="gray" children="검색" />
                <Button color="primary" children="좋아요" />
            </Menu>
        </Container>
    );
};

export default Header;

// STYLE
const Container = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 0 16px;
    border-bottom: 1px solid ${Variables.colors.gray};
`;

const Menu = styled.ul`
    display: flex;
    gap: 8px;
`;
