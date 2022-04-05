import { useState, useEffect } from "react";

function App() {
  const [money, setMoney] = useState(0);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const onChangeMoney = (event) => {
    setMoney(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((Response) => Response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>How much do you have?</h1>
      <input value={money} onChange={onChangeMoney} type="number"></input> $
      <h1>
        You can buy this amount of coins! {loading ? "" : `(${coins.length})`}
      </h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}) :
              {money === 0
                ? " 0"
                : ` ${(money / coin.quotes.USD.price).toFixed(5)}`}{" "}
              coins
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
