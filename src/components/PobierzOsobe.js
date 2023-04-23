export function PobierzOsobe() {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          imie: "Jan",
          nazwisko: "Kowalski",
          wiek: 30,
        }),
      1000
    )
  );
}
