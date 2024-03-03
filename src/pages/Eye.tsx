import useFetchData from "hooks/useFetchData";

import List from "components/List";

function Eye() {
    const eye = useFetchData("eye");

    return <List listItems={eye} />;
}

export default Eye;
