import { useEffect, useState } from "react";

function Currency() {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    const fetchCurrency = async () => {
      const response = await fetch(
        "http://api.nbp.pl/api/exchangerates/tables/a/today/"
      );
      const fetched = await response.json();
      setCurrencies(fetched[0].rates);
    };
    fetchCurrency();
  }, []);

  return (
    <select>
      {currencies.map((currency) => (
        <option>
          {currency.code} - {currency.currency} - {currency.mid}
        </option>
      ))}
    </select>
  );
}

export default Currency;
