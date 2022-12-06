import React, { useContext } from "react";
import { Link } from "react-router-dom";

export default function Nav () {

    return (
        <nav className="Nav">
            <Link className="Link" to="/">
                Home
            </Link>
        </nav>
    )
}