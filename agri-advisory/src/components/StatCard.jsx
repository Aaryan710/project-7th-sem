export default function StatCard({ title, value, icon: Icon, color = 'agri-green', unit = '' }) {
  const colorMap = {
    'agri-green': 'border-agri-green bg-green-50',
    'agri-blue': 'border-blue-500 bg-blue-50',
    'agri-orange': 'border-orange-500 bg-orange-50',
    'agri-purple': 'border-purple-500 bg-purple-50',
  };

  return (
    <div className={`card border-l-4 ${colorMap[color]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-agri-green">
            {value}
            {unit && <span className="text-lg ml-1">{unit}</span>}
          </p>
        </div>
        {Icon && (
          <Icon className={`w-12 h-12 opacity-20 text-agri-green`} />
        )}
      </div>
    </div>
  );
}
