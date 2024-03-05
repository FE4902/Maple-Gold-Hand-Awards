import { useEffect, useState, useRef } from 'react';

const useInfiniteScroll = (listItems: any) => {
    const [items, setItems] = useState<any>([]);
    const observeRef = useRef<HTMLDivElement>(null);

    const getListItems = () => {
        setItems((prev: any) => prev ? [...prev, ...listItems.slice(prev.length, prev.length + 12)] : 12);
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
            getListItems();
        }
    };

    const observer = new IntersectionObserver(callback, { threshold: 0.5 });

    useEffect(() => {
        if(listItems) {
            getListItems();
            observer.observe(observeRef.current as Element);
        }
    }, [listItems]);

    return { items, observeRef };
}

export default useInfiniteScroll;