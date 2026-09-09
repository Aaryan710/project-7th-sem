import { Zap } from 'lucide-react';

export default function SoilCard({ soil }) {
  if (!soil) return null;

  const nutrients = [
    { label: 'Nitrogen', value: soil.nitrogen, unit: 'kg/ha', optimal: '40-100' },
    { label: 'Phosphorus', value: soil.phosphorus, unit: 'kg/ha', optimal: '10-30' },
    { label: 'Potassium', value: soil.potassium, unit: 'kg/ha', optimal: '100-300' },
  ];

  const getNutrientStatus = (value, nutrient) => {
    if (nutrient === 'Nitrogen') return value < 40 ? 'Low' : value > 100 ? 'High' : 'Optimal';
    if (nutrient === 'Phosphorus') return value < 10 ? 'Low' : value > 30 ? 'High' : 'Optimal';
    if (nutrient === 'Potassium') return value < 100 ? 'Low' : value > 300 ? 'High' : 'Optimal';
    return 'Optimal';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Low':
        return 'text-red-600';
      case 'High':
        return 'text-orange-600';
      default:
        return 'text-green-600';
    }
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold text-agri-green mb-4">Soil Analysis</h3>

      <div className="space-y-3 mb-6">
        {nutrients.map((nutrient) => (
          <div key={nutrient.label}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{nutrient.label}</span>
              <span className={`text-sm font-semibold ${getStatusColor(getNutrientStatus(nutrient.value, nutrient.label))}`}>
                {getNutrientStatus(nutrient.value, nutrient.label)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-agri-green h-2 rounded-full transition-all"
                  style={{ width: `${Math.min((nutrient.value / 150) * 100, 100)}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-600">
                {nutrient.value} {nutrient.unit}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-agri-light p-3 rounded-lg">
          <p className="text-xs text-gray-600 mb-1">pH Level</p>
          <p className="text-2xl font-bold text-agri-green">{soil.pH}</p>
          <p className="text-xs text-gray-500 mt-1">
            {soil.pH < 5.5 ? 'Acidic' : soil.pH > 8.5 ? 'Alkaline' : 'Neutral'}
          </p>
        </div>

        <div className="bg-agri-light p-3 rounded-lg">
          <p className="text-xs text-gray-600 mb-1">Moisture</p>
          <p className="text-2xl font-bold text-agri-green">{soil.moisture}%</p>
          <p className="text-xs text-gray-500 mt-1">
            {soil.moisture < 20 ? 'Dry' : soil.moisture > 60 ? 'Wet' : 'Optimal'}
          </p>
        </div>
      </div>
    </div>
  );
}
