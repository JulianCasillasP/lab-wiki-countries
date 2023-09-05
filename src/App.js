import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const apiUrl = "https://ih-countries-api.herokuapp.com/countries";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <CountriesList countries={countriesData} />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route
                path="/:id"
                element={<CountryDetails countries={countriesData} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;