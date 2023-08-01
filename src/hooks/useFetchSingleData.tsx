import { useEffect, useState } from "react";

export const useFetchSingleData = (param: string) => {
    const [listItems, setListItems] = useState<string>();

    useEffect(() => {
        fetch(`/data/${param}.json`)
            .then((res) => res.json())
            .then((data) => {
                setListItems(data);
            });
    }, [param]);

    return listItems;
};
