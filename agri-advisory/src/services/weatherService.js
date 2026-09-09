const mockWeatherData = {
  current: {
    temperature: 28,
    humidity: 65,
    rainfall: 120,
    condition: 'Partly Cloudy',
    windSpeed: 12,
    pressure: 1013,
  },
  trends: [
    { date: 'Mon', temp: 26, rainfall: 10 },
    { date: 'Tue', temp: 27, rainfall: 15 },
    { date: 'Wed', temp: 28, rainfall: 8 },
    { date: 'Thu', temp: 29, rainfall: 5 },
    { date: 'Fri', temp: 30, rainfall: 0 },
    { date: 'Sat', temp: 28, rainfall: 12 },
    { date: 'Sun', temp: 27, rainfall: 18 },
  ],
};

export const getWeatherData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockWeatherData);
    }, 500);
  });
};

export const mockWeather = mockWeatherData;
