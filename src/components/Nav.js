import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/" />
            Shop
          </li>
          <li>
            <Link to="/order" />
            Cart
          </li>
        </ul>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
}

export default Nav;
