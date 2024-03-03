import { useEffect, useContext, useState } from "react";
import styled from "@emotion/styled";
import { LikeContext } from "../App";

import useFetchData from "hooks/useFetchData";
import { CardType } from "types/types";
import Variables from "styles/Variables";

import List from "components/List";

function Like() {
    const { likeItems } = useContext(LikeContext);
    const [listItems, setListItems] = useState<CardType[]>();
    const all = useFetchData();

    useEffect(() => {
        setListItems(all.filter((v: CardType) => likeItems.includes(v.id)));
    }, [all]);

    return (
        <>
            {likeItems.length > 0 ? (
                <List listItems={listItems} />
            ) : (
                <Empty>마음 속에 담아두신 아이템이 없으시군요!</Empty>
            )}
        </>
    );
}

export default Like;

const Empty = styled.p`
    margin-top: 6.125rem;
    text-align: center;
    padding: 2rem 0;
    font-size: ${Variables.fontSize.lg};
    font-weight: ${Variables.fontWeight.semiBold};
`;
