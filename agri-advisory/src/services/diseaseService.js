const mockDiseases = {
  leaf_blight: {
    name: 'Leaf Blight',
    confidence: 92,
    severity: 'High',
    crop: 'Rice',
    description: 'Leaf blight is a fungal disease.',
    recommendations: ['Apply fungicide spray', 'Remove infected leaves', 'Ensure proper drainage'],
    prevention: ['Use resistant varieties', 'Maintain spacing', 'Avoid excess nitrogen'],
  },
  healthy: {
    name: 'Healthy',
    confidence: 98,
    severity: 'None',
    crop: 'General',
    description: 'The crop leaf appears healthy.',
    recommendations: ['Continue monitoring', 'Maintain irrigation', 'Apply recommended fertilizers'],
    prevention: ['Regular field monitoring', 'Maintain cleanliness', 'Use quality seeds'],
  },
};

export const analyzeDiseaseImage = async (imageFile) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const diseases = Object.values(mockDiseases);
      resolve(diseases[Math.floor(Math.random() * diseases.length)]);
    }, 2000);
  });
};

export const getDiseaseDetails = async (diseaseName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const disease = Object.values(mockDiseases).find(d => d.name.toLowerCase() === diseaseName.toLowerCase());
      resolve(disease || mockDiseases.healthy);
    }, 500);
  });
};

export const mockDiseasesList = Object.values(mockDiseases);
