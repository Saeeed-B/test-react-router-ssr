import React from "react";

import { Link } from "react-router-dom";


export default Index = (props)=> {
    return(
        <div>
            <div id="Links">
              <Link id="link1" to='/ssr-work'>ssr-work</Link>
              <Link id="link2" to='/ssr-not-work'>ssr-not-work</Link>
            </div>
        </div>
    );
}