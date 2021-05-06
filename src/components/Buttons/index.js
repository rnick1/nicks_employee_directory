import React  from 'react';

function Buttons (props) {
    return(
    <div>
        <button onClick={props.handleAscending}>Sort Ascending</button>
        <button onClick={props.handleDescending}>Sort Descending</button>
        <button onClick={props.handleAscending}>Filter By Gender</button>
    </div>
    )
}

export default Buttons