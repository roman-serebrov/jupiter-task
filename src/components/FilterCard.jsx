import React from "react";
import Select from "./Selected/Selected";

function FilterCard({query, changeQuery}) {

    return (
        <div className="filter__card" style={{marginTop: "20px"}}>
            <Select 
                query={query}
                changeQuery={changeQuery}
            />
        </div>
    )
};


export default FilterCard;