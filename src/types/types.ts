export type CardType = {
    id: number;
    categoryId: number;
    category?: string;
    title: string;
    author: string;
    img: string;
};

export type CardListProps = {
    listItems?: CardType[] | undefined;
};

export type ButtonType = {
    as?: React.ElementType;
    to?: string;
    color?: "default" | "primary" | "gray";
    children: string;
    onClick?: () => void;
};

export type NavButtonType = {
    navigate?: string;
    color?: "default" | "primary" | "gray";
    children: string;
};
