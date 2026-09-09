import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import { getCropDetails } from '../services/recommendationService';
import { useState, useEffect } from 'react';
import { LoadingState } from '../components/LoadingStates';

export default function CropResultPage() {
  const { cropName } = useParams();
  const navigate = useNavigate();
  const [crop, setCrop] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCrop = async () => {
      try {
        const details = await getCropDetails(cropName);
        setCrop(details);
      } finally {
        setIsLoading(false);
      }
    };
    loadCrop();
  }, [cropName]);

  if (isLoading) return (
    <div className="min-h-screen bg-agri-light">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <LoadingState message="Loading crop details..." />
      </main>
    </div>
  );

  if (!crop) return <div>Crop not found</div>;

  return (
    <div className="min-h-screen bg-agri-light">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-agri-green font-semibold mb-6 hover:opacity-70">
          <ArrowLeft size={20} /> Back
        </button>

        <div className="card mb-8">
          <h1 className="text-4xl font-bold text-agri-green mb-4">{crop.name}</h1>
          <p className="text-gray-600 mb-6">{crop.description}</p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-agri-light p-4 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Suitability</p>
              <p className="text-3xl font-bold text-agri-green">{crop.suitability}%</p>
            </div>
            <div className="bg-agri-light p-4 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Expected Yield</p>
              <p className="text-3xl font-bold text-agri-green">{crop.expectedYield} t/ha</p>
            </div>
            <div className="bg-agri-light p-4 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Est. Profit</p>
              <p className="text-3xl font-bold text-green-600">₹{crop.estimatedProfit.toLocaleString()}</p>
            </div>
            <div className="bg-agri-light p-4 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Sustainability</p>
              <p className="text-3xl font-bold text-agri-green">{crop.sustainabilityScore}%</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="card">
            <h3 className="text-xl font-bold text-agri-green mb-4">Nutrient Requirements</h3>
            <div className="space-y-3">
              <div><p className="text-sm text-gray-600">Nitrogen</p><p className="font-semibold text-agri-green">{crop.nitrogen}</p></div>
              <div><p className="text-sm text-gray-600">Phosphorus</p><p className="font-semibold text-agri-green">{crop.phosphorus}</p></div>
              <div><p className="text-sm text-gray-600">Potassium</p><p className="font-semibold text-agri-green">{crop.potassium}</p></div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-agri-green mb-4">Growing Info</h3>
            <div><p className="text-sm text-gray-600">Duration</p><p className="font-semibold text-agri-green">{crop.growingDuration}</p></div>
            <div className="mt-3"><p className="text-sm text-gray-600">Water</p><p className="font-semibold text-agri-green">{crop.waterRequirement}</p></div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-agri-green mb-4">Climate</h3>
            <div><p className="text-sm text-gray-600">Optimal Temperature</p><p className="font-semibold text-agri-green">{crop.optimalTemp}</p></div>
            <div className="mt-3"><p className="text-sm text-gray-600">Rainfall</p><p className="font-semibold text-agri-green">{crop.optimalRainfall}</p></div>
          </div>
        </div>
      </main>
    </div>
  );
}
