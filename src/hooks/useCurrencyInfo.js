import { useEffect, useState } from "react";
//Creating a custom hook which takes currency as input and returns data from the api
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[currency]);
        setData(data[currency]);
      });
  }, [currency]);

  return data;
}
export default useCurrencyInfo;
