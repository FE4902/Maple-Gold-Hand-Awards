import { useEffect, useState } from "react";
import { CardType } from "types/types";

export const useFetchSingleData = (param: string): CardType[] => {
    const [listItems, setListItems] = useState<CardType[]>([]);

    useEffect(() => {
        fetch(`/data/${param}.json`)
            .then((res) => res.json())
            .then((data) => {
                setListItems(data);
            });
    }, [param]);

    return listItems;
};
