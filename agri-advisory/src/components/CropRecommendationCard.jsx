import { Link } from 'react-router-dom';
import { TrendingUp, Leaf } from 'lucide-react';

export default function CropRecommendationCard({ crop }) {
  if (!crop) return null;

  const getSuitabilityColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="card">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-agri-green">{crop.name}</h3>
        <Leaf className="w-8 h-8 text-agri-pale-green" />
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Suitability Score</span>
            <span className={`text-lg font-bold ${getSuitabilityColor(crop.suitability)}`}>
              {crop.suitability}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="h-3 rounded-full"
              style={{
                width: `${crop.suitability}%`,
                backgroundColor: crop.suitability >= 80 ? '#4CAF50' : crop.suitability >= 60 ? '#FBC02D' : '#EF5350',
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-agri-light p-3 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Expected Yield</p>
            <p className="font-bold text-agri-green">{crop.expectedYield} t/ha</p>
          </div>
          <div className="bg-agri-light p-3 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Est. Profit</p>
            <p className="font-bold text-agri-green">₹{crop.estimatedProfit.toLocaleString()}</p>
          </div>
          <div className="bg-agri-light p-3 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Sustainability</p>
            <p className="font-bold text-agri-green">{crop.sustainabilityScore}%</p>
          </div>
        </div>
      </div>

      <Link
        to={`/crop-result/${crop.name}`}
        className="btn-primary w-full text-center block"
      >
        View Full Details
      </Link>
    </div>
  );
}
