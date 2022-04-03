import React from "react";


export default Layout = (props)=> {
    return(
        <div id='layout'>
            This small repository is made to show the difference between npdev-react-loadable and react-router-ssr packages.
Below are two routes, one normally imported
  And one loadable imported,
The route imported with loadable does not have SSR.

            <div style={{margin : "30px"}}>
                {props.children}
            </div>
        </div>
    );
}