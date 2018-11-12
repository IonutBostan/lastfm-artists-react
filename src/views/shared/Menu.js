import React from "react";
// import { Link } from "../ui";
import { Link } from "react-router-dom";

const Menu = ({ data = [], active, onMenuClick }) => (
  <div className="menu">
    <ul className="reset text-right">
      {data.filter(country => country.id !== active).map(country => (
        <li key={country.id}>
          <Link to={country.id} className="header-link">
            {country.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default React.memo(Menu);
