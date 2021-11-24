

import React, { useState } from "react";

const Like = () => {
    const [Like, setLike] = useState(false);

    const like_Dislike = () => {
        setLike(!Like);
        // alert('hello',Like)
    };
    return (
        <div className='toggleMybutton_on_off m-5'>

            <h1>{!Like ? "switch is turned oN" : "switch is turned off "}</h1>
            <br />
            <i
                className={`fa like ${!Like ? "fa-toggle-on " : "fa-toggle-off "} `}
                id="togglePassword"
                onMouseDown={like_Dislike}
            ></i>

        </div>
    );
};

export default Like;
