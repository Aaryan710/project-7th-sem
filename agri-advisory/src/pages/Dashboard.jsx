import { Link } from 'react-router-dom';
import { Leaf, Search, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import WeatherCard from '../components/WeatherCard';
import SoilCard from '../components/SoilCard';
import CropRecommendationCard from '../components/CropRecommendationCard';
import { mockWeather } from '../services/weatherService';
import { mockCropsList } from '../services/recommendationService';

export default function Dashboard({ language, setLanguage }) {
  const soil = { nitrogen: 60, phosphorus: 25, potassium: 180, pH: 6.8, moisture: 42 };
  const crop = mockCropsList[0];

  return (
    <div className="min-h-screen bg-agri-light">
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-agri-green mb-8">Farmer Dashboard</h1>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard title="Field Location" value="Ranchi" />
          <StatCard title="Soil Health" value="Balanced" />
          <StatCard title="Weather" value="28°C" />
          <StatCard title="Market" value="Stable" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <WeatherCard weather={mockWeather.current} />
          <SoilCard soil={soil} />
          <CropRecommendationCard crop={crop} />
        </div>

        <div className="card">
          <h3 className="text-2xl font-bold text-agri-green mb-6">Quick Actions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/recommend" className="card border-2 border-agri-green text-center hover:bg-green-50 transition">
              <Leaf className="w-8 h-8 text-agri-green mx-auto mb-2" />
              <p className="font-semibold text-agri-green">Get Recommendation</p>
            </Link>
            <Link to="/disease-detection" className="card border-2 border-agri-green text-center hover:bg-green-50 transition">
              <Search className="w-8 h-8 text-agri-green mx-auto mb-2" />
              <p className="font-semibold text-agri-green">Detect Disease</p>
            </Link>
            <Link to="/assistant" className="card border-2 border-agri-green text-center hover:bg-green-50 transition">
              <MessageSquare className="w-8 h-8 text-agri-green mx-auto mb-2" />
              <p className="font-semibold text-agri-green">Ask AI</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
