import { useEffect, useState } from "react";

type CardType = {
    id: number;
    categoryId: number;
    title: string;
    author: string;
    img: string;
};

type CardListProps = {
    listItems?: CardType[] | undefined;
};

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
