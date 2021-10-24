import React from "react";
import { navStyle } from "./NavStyles";
import { Link } from "react-router-dom";
import SignoutIcon from "../../icons/SignoutIcon";

export function Nav({ position, userAuth, signout }) {
  return (
    <nav css={[navStyle, position]}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>{" "}
        <li>
          <Link to="/projects">Other Projects</Link>
        </li>{" "}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {userAuth ? (
          <li>
            <div className="nav-btn-signout" to="/signin" onClick={signout}>
              <SignoutIcon /> <p>Signout</p>
            </div>
          </li>
        ) : (
          <>
            <li>
              <Link className="nav-btn" to="/signin">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="nav-btn nav-btn-signup" to="/signup">
                Sign up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
