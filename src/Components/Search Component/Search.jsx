import React from "react";
import SearchIcon from "../Search Icon/Search.svg"
function Search(props){

    return(
        <div className="search">
            <input  
                placeholder="search for movies"
                value={props.value}
                onChange={(e)=>{props.onChange(e)}}
            />
            <img
                src={SearchIcon}
                alt="search"
                onClick={()=>{props.onClick()}}
            />
        </div>
    )
}

export default Search;