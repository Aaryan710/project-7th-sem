import { AlertCircle, CheckCircle } from 'lucide-react';
import { getSeverityColor, getSeverityBg } from '../utils/helpers';

export default function DiseaseResult({ disease }) {
  if (!disease) return null;

  const isHealthy = disease.severity === 'None';

  return (
    <div className="card">
      <div className="flex items-start gap-4 mb-6">
        <div className={`p-3 rounded-lg ${getSeverityBg(disease.severity)}`}>
          {isHealthy ? (
            <CheckCircle className="w-8 h-8 text-green-600" />
          ) : (
            <AlertCircle className={`w-8 h-8 ${getSeverityColor(disease.severity)}`} />
          )}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-agri-green mb-1">
            {isHealthy ? '✓ Healthy Crop' : disease.name}
          </h3>
          <p className="text-gray-600">Affecting: {disease.crop}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-agri-light p-4 rounded-lg">
          <p className="text-xs text-gray-600 mb-1">Confidence</p>
          <p className="text-2xl font-bold text-agri-green">{disease.confidence}%</p>
        </div>
        <div className="bg-agri-light p-4 rounded-lg">
          <p className="text-xs text-gray-600 mb-1">Severity</p>
          <p className={`text-lg font-bold ${getSeverityColor(disease.severity)}`}>
            {disease.severity}
          </p>
        </div>
        <div className="bg-agri-light p-4 rounded-lg">
          <p className="text-xs text-gray-600 mb-1">Status</p>
          <p className="text-lg font-bold text-green-600">
            {isHealthy ? 'Safe' : 'Alert'}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <section>
          <h4 className="text-lg font-semibold text-agri-green mb-3">What happened?</h4>
          <p className="text-gray-700 leading-relaxed">{disease.description}</p>
        </section>

        <section>
          <h4 className="text-lg font-semibold text-agri-green mb-3">Recommended Action</h4>
          <ul className="space-y-2">
            {disease.recommendations.map((rec, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-agri-green font-bold">•</span>
                <span className="text-gray-700">{rec}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className="text-lg font-semibold text-agri-green mb-3">Prevention Measures</h4>
          <ul className="space-y-2">
            {disease.prevention.map((prev, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-agri-green font-bold">•</span>
                <span className="text-gray-700">{prev}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This analysis is based on image recognition AI. For critical decisions, consult with local agricultural experts.
        </p>
      </div>
    </div>
  );
}
