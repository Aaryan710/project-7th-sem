import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { getMarketData } from '../services/marketService';

export default function MarketPage({ language }) {
  const [marketData, setMarketData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getMarketData();
        setMarketData(data);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-agri-light">
      <Navbar language={language} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-agri-green mb-8">Agricultural Market Prices</h1>
        {isLoading ? (
          <p>Loading market data...</p>
        ) : (
          <div className="card overflow-x-auto">
            <table className="w-full">
              <thead className="bg-agri-light border-b-2 border-agri-green">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Crop</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Market</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Price/Quintal</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Daily Change</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Volume</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((item, idx) => (
                  <tr key={idx} className="border-b hover:bg-agri-light">
                    <td className="px-4 py-3 font-semibold text-agri-green">{item.crop}</td>
                    <td className="px-4 py-3">{item.market}</td>
                    <td className="px-4 py-3 font-bold">₹{item.pricePerQuintal.toLocaleString()}</td>
                    <td className={`px-4 py-3 font-bold ${item.dailyChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.dailyChange >= 0 ? '+' : ''}{item.dailyChange}
                    </td>
                    <td className="px-4 py-3">{item.volume} q</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
