import { Cloud, Droplets, Wind, Eye } from 'lucide-react';
import { getWeatherIcon } from '../utils/helpers';

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-agri-green mb-4">Current Weather</h3>

      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-5xl font-bold text-agri-green mb-2">
            {weather.temperature}°C
          </p>
          <p className="text-lg text-gray-600">{weather.condition}</p>
        </div>
        <div className="text-5xl">{getWeatherIcon(weather.condition)}</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-agri-light p-3 rounded-lg flex items-center gap-2">
          <Droplets className="w-5 h-5 text-agri-green" />
          <div>
            <p className="text-xs text-gray-600">Humidity</p>
            <p className="font-semibold text-agri-green">{weather.humidity}%</p>
          </div>
        </div>

        <div className="bg-agri-light p-3 rounded-lg flex items-center gap-2">
          <Cloud className="w-5 h-5 text-agri-green" />
          <div>
            <p className="text-xs text-gray-600">Rainfall</p>
            <p className="font-semibold text-agri-green">{weather.rainfall}mm</p>
          </div>
        </div>

        <div className="bg-agri-light p-3 rounded-lg flex items-center gap-2">
          <Wind className="w-5 h-5 text-agri-green" />
          <div>
            <p className="text-xs text-gray-600">Wind Speed</p>
            <p className="font-semibold text-agri-green">{weather.windSpeed} km/h</p>
          </div>
        </div>

        <div className="bg-agri-light p-3 rounded-lg flex items-center gap-2">
          <Eye className="w-5 h-5 text-agri-green" />
          <div>
            <p className="text-xs text-gray-600">Pressure</p>
            <p className="font-semibold text-agri-green">{weather.pressure} mb</p>
          </div>
        </div>
      </div>
    </div>
  );
}
