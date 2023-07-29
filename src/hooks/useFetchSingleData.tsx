import { useEffect, useState } from "react";

export const useFetchSingleData = (param: string) => {
    const [listItems, setListItems] = useState<any>();

    useEffect(() => {
        fetch(`/data/${param}.json`)
            .then((res) => res.json())
            .then((data) => {
                setListItems(data);
            });
    }, [param]);

    return listItems;
};
