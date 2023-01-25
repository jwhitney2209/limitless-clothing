import { Outlet, Link } from "react-router-dom";
import "./nav.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

function Nav() {
  return (
    <>
      <div className="nav">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
