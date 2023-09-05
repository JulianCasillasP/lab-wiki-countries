import React from "react";
import { Link } from "react-router-dom";

function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {countries.map((country) => (
          <Link
            key={country.alpha3Code}
            to={`/${country.alpha3Code}`}
            className="list-group-item list-group-item-action"
          >
            <div className="d-flex justify-content-between align-items-center">
              <span>{country.name.common}</span>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.alpha3Code} flag`}
                width="50" 
                height="35"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;