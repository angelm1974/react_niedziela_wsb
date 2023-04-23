import axios from "axios";
import React, { useState, useEffect } from "react";

const PobierzPogode = () => {
  const [pogoda, setPogoda] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    axios
      .get("https://danepubliczne.imgw.pl/api/data/synop/")
      .then((response) => {
        setPogoda(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  const filtrPogody = pogoda.filter((item) => item.stacja.includes(filterText));

  return (
    <div class="container">
      <h2>Witaj w komponencie pogodowym</h2>
      <input type="text" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
      <div>
        {filtrPogody.map((item) => (
          // <li key={item.id_stacji}><strong>{item.stacja}</strong>
          // </li>
          <>
            <p>
              <a
                class="btn btn-primary"
                data-bs-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                {item.stacja}
              </a>
            </p>
            <div class="row">
              <div class="col">
                <div class="collapse multi-collapse " id="multiCollapseExample1">
                  <div class="card card-body">
                    <p>temperatura: {item.temperatura}</p>
                                      </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PobierzPogode;
