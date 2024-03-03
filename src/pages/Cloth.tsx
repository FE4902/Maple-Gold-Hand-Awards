import useFetchData from "hooks/useFetchData";

import List from "components/List";

function Cloth() {
    const cloth = useFetchData("cloth");

    return <List listItems={cloth} />;
}

export default Cloth;
