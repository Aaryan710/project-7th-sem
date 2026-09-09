export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(value);
};

export const getWeatherIcon = (condition) => {
  const iconMap = {
    'Sunny': '☀️',
    'Cloudy': '☁️',
    'Rainy': '🌧️',
    'Partly Cloudy': '⛅',
  };
  return iconMap[condition] || '🌤️';
};

export const getSeverityColor = (severity) => {
  switch (severity) {
    case 'High': return 'text-red-600';
    case 'Medium': return 'text-yellow-600';
    case 'Low': return 'text-blue-600';
    default: return 'text-green-600';
  }
};

export const getSeverityBg = (severity) => {
  switch (severity) {
    case 'High': return 'bg-red-100';
    case 'Medium': return 'bg-yellow-100';
    case 'Low': return 'bg-blue-100';
    default: return 'bg-green-100';
  }
};

export const validateImageFile = (file) => {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
  const maxSize = 5 * 1024 * 1024;

  if (!validTypes.includes(file.type)) {
    return { valid: false, error: 'Please upload a JPG, PNG, or WebP image.' };
  }

  if (file.size > maxSize) {
    return { valid: false, error: 'Image size must be less than 5MB.' };
  }

  return { valid: true };
};
