import React, { useState } from "react";

function Formularz(props) {
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ imie, nazwisko, email });
    setImie("");
    setNazwisko("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div class="mb-3">
          <label for="frmImie" class="form-label">
            Podaj imię
          </label>
          <input
            type="text"
            class="form-control"
            id="frmImie"
            placeholder="Tutaj wpisz imię..."
            value={imie} 
            onChange={(event) => setImie(event.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="frmNazwisko" class="form-label">
            Podaj nazwisko
          </label>
          <input
            type="text"
            class="form-control"
            id="frmNazwisko"
            placeholder="Tutaj wpisz nazwisko..."
            value={nazwisko}
            onChange={(event) => setNazwisko(event.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="frmEmail" class="form-label">
            Podaj email
          </label>
          <input
            type="text"
            class="form-control"
            id="frmEmail"
            placeholder="Tutaj wpisz email..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Zapisz
        </button>
      </form>
    </div>
  );
}

export default Formularz;