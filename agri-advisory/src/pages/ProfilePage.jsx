import { User, Settings } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function ProfilePage({ language, setLanguage }) {
  const [profile] = [{
    name: 'Rajesh Kumar',
    email: 'rajesh@farm.com',
    location: 'Ranchi, Jharkhand',
    landSize: 2.5,
    experience: '8 years',
  }][0];

  return (
    <div className="min-h-screen bg-agri-light">
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-agri-green mb-8">My Profile</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="w-20 h-20 bg-agri-green rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-agri-green">{profile.name}</h2>
            <p className="text-gray-600">Farmer • Jharkhand</p>
          </div>
          <div className="lg:col-span-2">
            <div className="card mb-8">
              <h3 className="text-xl font-bold text-agri-green mb-6">Farming Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-agri-light p-4 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Land Size</p>
                  <p className="text-2xl font-bold text-agri-green">{profile.landSize} ha</p>
                </div>
                <div className="bg-agri-light p-4 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Experience</p>
                  <p className="text-2xl font-bold text-agri-green">{profile.experience}</p>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-agri-green mb-6 flex items-center gap-2">
                <Settings size={24} /> Settings
              </h3>
              <div className="flex items-center justify-between p-3 bg-agri-light rounded-lg">
                <p className="font-semibold">Language</p>
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className="px-3 py-1 border border-agri-green rounded-lg">
                  <option value="en">English</option>
                  <option value="hi">हिंदी</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
