import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CryptoSummary from './components/CryptoSummary';
import { Crypto } from './Types';

function App() {
    const [cryptos, setCryptos] = useState<Crypto[] | null>(null);
    useEffect(() => {
        const url =
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
        axios.get(url).then((response) => {
            setCryptos(response.data);
        });
    }, []);
    return (
        <div className="App">
            {cryptos
                ? cryptos.map((crypto) => {
                      return <CryptoSummary crypto={crypto} />;
                  })
                : null}
        </div>
    );
}

export default App;
