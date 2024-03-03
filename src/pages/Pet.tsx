import useFetchData from "hooks/useFetchData";

import List from "components/List";

function Pet() {
    const pet = useFetchData("pet");

    return <List listItems={pet} />;
}

export default Pet;
