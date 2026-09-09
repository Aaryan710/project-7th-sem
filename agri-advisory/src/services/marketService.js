const mockMarketData = [
  { id: 1, crop: 'Rice', market: 'Ranchi', location: 'Jharkhand', pricePerQuintal: 2450, dailyChange: 45, volume: 1200 },
  { id: 2, crop: 'Wheat', market: 'Madhubani', location: 'Bihar', pricePerQuintal: 2200, dailyChange: -30, volume: 850 },
  { id: 3, crop: 'Maize', market: 'Jamshedpur', location: 'Jharkhand', pricePerQuintal: 1800, dailyChange: 20, volume: 650 },
];

const priceHistory = {
  rice: [
    { date: 'Sep 2', price: 2380 },
    { date: 'Sep 3', price: 2400 },
    { date: 'Sep 4', price: 2420 },
    { date: 'Sep 5', price: 2430 },
    { date: 'Sep 6', price: 2440 },
    { date: 'Sep 9', price: 2450 },
  ],
};

export const getMarketData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockMarketData), 500);
  });
};

export const getPriceHistory = async (cropName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(priceHistory[cropName.toLowerCase()] || []);
    }, 500);
  });
};

export const mockMarkets = mockMarketData;
