import { Link } from 'react-router-dom';
import { Leaf, Droplets, TrendingUp, Brain, Sprout, BarChart3, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-agri-green text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Leaf className="w-8 h-8" />
            <span>AgriWise</span>
          </Link>
          <div className="flex gap-4">
            <Link to="/dashboard" className="hover:text-agri-pale-green transition">Dashboard</Link>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-agri-green to-agri-light-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Smart Farming. Better Decisions. Sustainable Future.</h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl">
            AI-powered agricultural recommendations based on soil, weather, and market data.
          </p>
          <div className="flex gap-4">
            <Link to="/recommend" className="btn-primary inline-flex items-center gap-2">
              Get Crop Recommendation <ArrowRight size={20} />
            </Link>
            <Link to="/disease-detection" className="bg-white text-agri-green px-6 py-3 rounded-lg font-semibold hover:bg-agri-light transition inline-flex items-center gap-2">
              Check Crop Disease <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-agri-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-agri-green mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: TrendingUp, title: 'Crop Recommendations', desc: 'Personalized suggestions based on soil and weather.' },
              { icon: Droplets, title: 'Soil Analysis', desc: 'Detailed nutrient and pH analysis.' },
              { icon: Brain, title: 'Disease Detection', desc: 'AI-powered leaf disease identification.' },
              { icon: BarChart3, title: 'Market Insights', desc: 'Real-time crop prices and trends.' },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="card flex gap-6">
                  <Icon className="w-12 h-12 text-agri-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-agri-green mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-agri-green text-white py-12 text-center">
        <p>&copy; 2026 AgriWise. Empowering farmers with AI technology.</p>
      </footer>
    </div>
  );
}
