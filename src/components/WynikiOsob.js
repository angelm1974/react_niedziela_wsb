import { useEffect } from "react";
import { PobierzOsobe } from "./PobierzOsobe";
export function WynikiOsob() {
  useEffect(() => {
    PobierzOsobe().then((osoba) => console.log(osoba));
  }, []);
  return null;
}
