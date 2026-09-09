import { useState } from 'react';
import Navbar from '../components/Navbar';
import DiseaseUpload from '../components/DiseaseUpload';
import DiseaseResult from '../components/DiseaseResult';
import { LoadingState } from '../components/LoadingStates';
import { analyzeDiseaseImage } from '../services/diseaseService';

export default function DiseaseDetectionPage({ language }) {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = async (imageFile) => {
    setIsLoading(true);
    try {
      const diseaseResult = await analyzeDiseaseImage(imageFile);
      setResult(diseaseResult);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-agri-light">
      <Navbar language={language} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-agri-green mb-2">AI Crop Disease Detection</h1>
        <p className="text-gray-600 mb-8">Upload a leaf image to detect diseases.</p>

        {result ? (
          <div className="space-y-8">
            <DiseaseResult disease={result} />
            <button onClick={handleReset} className="btn-primary w-full">Analyze Another Image</button>
          </div>
        ) : (
          <>
            {isLoading ? (
              <LoadingState message="AI is analyzing..." />
            ) : (
              <>
                <DiseaseUpload onImageSelect={handleImageSelect} isLoading={isLoading} />
                <div className="card mt-8">
                  <h3 className="text-lg font-bold text-agri-green mb-4">How to Get Best Results</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Use a clear, well-lit photo</li>
                    <li>✓ Focus on affected leaf area</li>
                    <li>✓ Include only the leaf in frame</li>
                    <li>✓ Use JPG, PNG, or WebP format</li>
                  </ul>
                </div>
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}
