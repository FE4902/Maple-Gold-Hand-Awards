import List from "components/List";
import { useFetchSingleData } from "hooks/useFetchSingleData";

function Eye() {
    const eye = useFetchSingleData("eye");

    return <List listItems={eye} />;
}

export default Eye;
