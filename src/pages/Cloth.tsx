import List from "components/List";
import { useFetchSingleData } from "hooks/useFetchSingleData";

function Cloth() {
    const cloth = useFetchSingleData("cloth");

    return <List listItems={cloth} />;
}

export default Cloth;
