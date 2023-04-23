import React, { useState } from "react";
import Formularz from "./Formularz";

function DaneUser() {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    setFormData(data);
  };
  return (
    <div>
      <Formularz onSubmit={handleSubmit} />
      {formData && (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              {formData.imie} {formData.nazwisko}
            </h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="mailto:{formData.email}" class="card-link">
              Napisz do mnie
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DaneUser;
