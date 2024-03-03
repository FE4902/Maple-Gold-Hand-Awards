import useFetchData from "hooks/useFetchData";

import List from "components/List";

function Hair() {
    const hair = useFetchData("hair");

    return <List listItems={hair} />;
}

export default Hair;
