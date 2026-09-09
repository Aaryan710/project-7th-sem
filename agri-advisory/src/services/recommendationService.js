const mockCrops = {
  rice: {
    name: 'Rice',
    suitability: 92,
    expectedYield: 45,
    estimatedProfit: 35000,
    sustainabilityScore: 85,
    waterRequirement: 'High',
    growingDuration: '120-150 days',
    nitrogen: '80-120 kg/ha',
    phosphorus: '40-60 kg/ha',
    potassium: '40-60 kg/ha',
    optimalTemp: '20-30°C',
    optimalRainfall: '1000-1500mm',
    description: 'Rice is highly suitable for your region given the soil conditions, weather, and water availability.',
  },
  wheat: {
    name: 'Wheat',
    suitability: 78,
    expectedYield: 35,
    estimatedProfit: 28000,
    sustainabilityScore: 80,
    waterRequirement: 'Medium',
    growingDuration: '120-140 days',
    nitrogen: '100-120 kg/ha',
    phosphorus: '60-80 kg/ha',
    potassium: '40-60 kg/ha',
    optimalTemp: '15-25°C',
    optimalRainfall: '400-650mm',
    description: 'Wheat is well-suited for your soil pH and climate conditions.',
  },
  maize: {
    name: 'Maize',
    suitability: 85,
    expectedYield: 50,
    estimatedProfit: 40000,
    sustainabilityScore: 75,
    waterRequirement: 'Medium',
    growingDuration: '110-130 days',
    nitrogen: '120-150 kg/ha',
    phosphorus: '60-90 kg/ha',
    potassium: '40-60 kg/ha',
    optimalTemp: '21-27°C',
    optimalRainfall: '500-800mm',
    description: 'Maize performs excellently in your region with good market demand.',
  },
  pulses: {
    name: 'Pulses',
    suitability: 88,
    expectedYield: 20,
    estimatedProfit: 32000,
    sustainabilityScore: 95,
    waterRequirement: 'Low',
    growingDuration: '90-120 days',
    nitrogen: '20-40 kg/ha',
    phosphorus: '40-60 kg/ha',
    potassium: '30-40 kg/ha',
    optimalTemp: '20-30°C',
    optimalRainfall: '400-600mm',
    description: 'Pulses are excellent for crop rotation and soil nitrogen enhancement.',
  },
};

export const getRecommendations = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const recommendations = Object.values(mockCrops).sort(
        (a, b) => b.suitability - a.suitability
      );
      resolve(recommendations);
    }, 1500);
  });
};

export const getCropDetails = async (cropName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const crop = Object.values(mockCrops).find(
        (c) => c.name.toLowerCase() === cropName.toLowerCase()
      );
      resolve(crop || mockCrops.rice);
    }, 800);
  });
};

export const mockCropsList = Object.values(mockCrops);
