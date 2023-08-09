import { useEffect, useState } from "react";
import { CardType } from "types/types";

export const useFetchData = () => {
    const [listItems, setListItems] = useState<CardType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lists = ["cloth", "eye", "hair", "pet"];
                const listsData = await Promise.all(
                    lists.map((list) =>
                        fetch(`/data/${list}.json`).then((res) => res.json())
                    )
                );
                const allData = [].concat(...listsData);
                setListItems(allData);
            } catch (error) {
                // 에러 처리
            }
        };

        fetchData();
    }, []);

    return listItems;
};
