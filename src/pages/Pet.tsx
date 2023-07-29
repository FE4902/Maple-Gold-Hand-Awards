import List from "components/List";
import { useFetchSingleData } from "hooks/useFetchSingleData";

function Pet() {
    const pet = useFetchSingleData("pet");

    return <List listItems={pet} />;
}

export default Pet;
