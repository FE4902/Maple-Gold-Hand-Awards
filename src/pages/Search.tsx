import { useEffect, useState } from "react";
import List from "components/List";

import styled from "@emotion/styled";
import Variables from "styles/Variables";
import { useFetchData } from "hooks/useFetchData";

function Search() {
    const [searchValue, setSearchValue] = useState<string>();
    const [searchResult, setSearchResult] = useState<any>();
    const all = useFetchData();

    const handleInput = (e: any) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        console.log(1);
    }, [all]);

    useEffect(() => {
        setSearchResult(
            all.filter(
                (v: any) =>
                    v.title.includes(searchValue) ||
                    v.author.includes(searchValue)
            )
        );
    }, [searchValue]);

    return (
        <>
            <SearchBar
                type="search"
                placeholder="검색어를 입력해주세요."
                autoFocus
                onInput={handleInput}
            ></SearchBar>
            {searchValue ? (
                <List listItems={searchResult} />
            ) : (
                <span>검색 결과가 없습니다.</span>
            )}
        </>
    );
}

export default Search;

const SearchBar = styled.input`
    display: flex;
    max-width: calc(100% - 32px);
    width: 640px;
    margin: 32px auto 16px;
    padding: 12px 16px;
    border: 1px solid ${Variables.colors.gray};
    font-size: 28px;
    border-radius: 8px;

    &:is(:hover, :focus) {
        border: 1px solid ${Variables.colors.primary};
        box-shadow: 0 0 0 1px ${Variables.colors.primary};
        outline: none;
    }
`;
