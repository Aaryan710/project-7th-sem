import { Leaf, Droplets } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function SustainabilityPage({ language }) {
  return (
    <div className="min-h-screen bg-agri-light">
      <Navbar language={language} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-agri-green mb-8">Sustainable Farming Practices</h1>
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="card text-center">
            <Leaf className="w-12 h-12 text-agri-green mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-1">Soil Health</p>
            <p className="text-3xl font-bold text-agri-green">95%</p>
          </div>
          <div className="card text-center">
            <Droplets className="w-12 h-12 text-agri-green mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-1">Water Savings</p>
            <p className="text-3xl font-bold text-agri-green">40%</p>
          </div>
          <div className="card text-center">
            <p className="text-sm text-gray-600 mb-1">Carbon Neutral</p>
            <p className="text-3xl font-bold text-agri-green">YES</p>
          </div>
          <div className="card text-center">
            <p className="text-sm text-gray-600 mb-1">Yield Increase</p>
            <p className="text-3xl font-bold text-agri-green">25%</p>
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl font-bold text-agri-green mb-6">Crop Rotation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-agri-green">
              <h4 className="font-semibold text-agri-green mb-2">Sequence 1</h4>
              <p className="text-sm">Rice → Pulses → Wheat</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-agri-green">
              <h4 className="font-semibold text-agri-green mb-2">Sequence 2</h4>
              <p className="text-sm">Maize → Pulses → Maize</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-agri-green">
              <h4 className="font-semibold text-agri-green mb-2">Sequence 3</h4>
              <p className="text-sm">Cotton → Pulses → Sugarcane</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
