import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { LoadingState } from '../components/LoadingStates';
import { getRecommendations } from '../services/recommendationService';

export default function RecommendationPage({ language }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState(null);
  const [formData, setFormData] = useState({
    state: 'Jharkhand',
    district: 'Ranchi',
    nitrogen: 60,
    phosphorus: 25,
    potassium: 180,
  });

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const results = await getRecommendations(formData);
      setRecommendations(results);
    } finally {
      setIsLoading(false);
    }
  };

  if (recommendations) {
    return (
      <div className="min-h-screen bg-agri-light">
        <Navbar language={language} />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-agri-green mb-8">Recommended Crops</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((crop, i) => (
              <div key={i} className="card cursor-pointer hover:shadow-xl transition" onClick={() => navigate(`/crop-result/${crop.name}`)}>
                <h3 className="text-2xl font-bold text-agri-green mb-4">{crop.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between"><span>Suitability:</span><span className="font-bold text-agri-green">{crop.suitability}%</span></div>
                  <div className="flex justify-between"><span>Yield:</span><span className="font-bold">{crop.expectedYield} t/ha</span></div>
                  <div className="flex justify-between"><span>Profit:</span><span className="font-bold">₹{crop.estimatedProfit.toLocaleString()}</span></div>
                </div>
                <button className="btn-primary w-full mt-4">View Details</button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => setRecommendations(null)} className="btn-secondary">New Recommendation</button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-agri-light">
      <Navbar language={language} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-agri-green mb-8">Get Crop Recommendation - Step {step} of 2</h1>
        
        <div className="card mb-8">
          {isLoading ? (
            <LoadingState message="Generating recommendations..." />
          ) : (
            <>
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-agri-green mb-6">Location & Soil</h2>
                  <div>
                    <label className="block text-sm font-medium mb-2">State</label>
                    <select className="input-field" value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})}>
                      <option>Jharkhand</option>
                      <option>Bihar</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nitrogen (kg/ha): {formData.nitrogen}</label>
                    <input type="range" min="0" max="200" value={formData.nitrogen} onChange={(e) => setFormData({...formData, nitrogen: parseInt(e.target.value)})} className="w-full" />
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                <button onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1} className="btn-secondary disabled:opacity-50">Previous</button>
                {step < 2 ? (
                  <button onClick={() => setStep(2)} className="btn-primary flex items-center gap-2">Next <ChevronRight size={20} /></button>
                ) : (
                  <button onClick={handleGenerate} className="btn-primary">Generate Recommendations</button>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
