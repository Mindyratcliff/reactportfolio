import React from "react";

function Footer (){
    return (
        <div className="footer-copyright text-center py-3" style={{position: "sticky"}}>
          &copy; {new Date().getFullYear()} Copyright: Mindy Ratcliff
          </div>
    )
}

export default Footer;