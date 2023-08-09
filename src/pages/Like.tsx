import { useEffect, useContext, useState } from "react";
import List from "components/List";
import { LikeContext } from "../App";
import { CardType } from "types/types";

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
    }, []);

    return (
        <>
            <List listItems={listItems} />
        </>
    );
}

export default Like;
