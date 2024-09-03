//import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import airbnb from "../images/airbnb-brands-solid.svg";
import airbnb from "../../public/images/airbnb-brands-solid.svg";
export default function Navbar() {
  return (
    <nav>
      <img src={airbnb} className="logo" />
    </nav>
  );
}
