import { useEffect, useContext, useState } from "react";
import { LikeContext } from "../App";
import { CardType } from "types/types";
import Variables from "styles/Variables";

import styled from "@emotion/styled";
import List from "components/List";


function Like() {
    const [listItems, setListItems] = useState<CardType[]>();
    const { likeItems } = useContext(LikeContext);

    useEffect(() => {
        const lists = ["cloth", "eye", "hair", "pet"];
        const listsPromise = lists.map((list) =>
            fetch(`/data/${list}.json`).then((res) => res.json())
        );

        Promise.all(listsPromise).then((datas) => {
            setListItems(
                []
                    .concat(...datas)
                    .filter((v: CardType) => likeItems.includes(v.id))
            );
        });
    }, [listItems]);

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