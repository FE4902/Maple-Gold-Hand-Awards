import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import useFetchData from "hooks/useFetchData";
import { CardType } from "types/types";
import Variables from "styles/Variables";

import List from "components/List";

function Search() {
    const [searchValue, setSearchValue] = useState<string>();
    const [searchResult, setSearchResult] = useState<CardType[]>([]);
    const all = useFetchData();
    
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && setSearchValue(e.currentTarget.value);
    };

    useEffect(() => {
        setSearchResult(
            all.filter(
                (v: CardType) =>
                    v.title.includes(searchValue || "") ||
                    v.author.includes(searchValue || "")
            )
        );
    }, [searchValue]);

    return (
        <>
            <SearchBar
                type="search"
                placeholder="검색어를 입력해주세요."
                autoFocus
                onKeyDown={handleSearch}
            ></SearchBar>
            {searchValue && searchResult.length > 0 ? (
                <List listItems={searchResult} />
            ) : (
                <Empty>검색 결과가 없습니다.</Empty>
            )}
        </>
    );
}

export default Search;

const SearchBar = styled.input`
    display: flex;
    max-width: 640px;
    width: calc(100% - 2rem);
    height: 3.125rem;
    margin: 2rem auto 1rem;
    padding: 0.75rem 1rem;
    border: 1px solid ${Variables.colors.gray};
    font-size: ${Variables.fontSize.lg};
    border-radius: ${Variables.radius.lg};

    &:is(:hover, :focus) {
        border-color: ${Variables.colors.primary};
        box-shadow: 0 0 0 1px ${Variables.colors.primary};
        outline: none;
    }
`;

const Empty = styled.p`
    text-align: center;
    padding: 2rem 0;
    font-size: ${Variables.fontSize.lg};
    font-weight: ${Variables.fontWeight.semiBold};
`;
