import { useEffect, useState } from "react";
//Creating a custom hook which takes currency as input and returns data from the api
function useCurrencyInfo(currency) {
  const [data, useData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        data[currency];
      });
    console.log(data);
  }, [currency]);

  return data;
}
export default useCurrencyInfo;
