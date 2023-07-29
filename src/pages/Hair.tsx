import List from "components/List";
import { useFetchSingleData } from "hooks/useFetchSingleData";

function Hair() {
    const hair = useFetchSingleData("hair");

    return <List listItems={hair} />;
}

export default Hair;
