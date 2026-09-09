export const sendChatMessage = async (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let response = 'I am your AI Assistant. How can I help with agriculture?';
      const msg = message.toLowerCase();
      
      if (msg.includes('crop')) response = 'I recommend Rice or Maize based on your conditions.';
      else if (msg.includes('disease')) response = 'Please upload a leaf image for disease detection.';
      else if (msg.includes('market')) response = 'Rice: ₹2450, Wheat: ₹2200, Maize: ₹1800 per quintal.';
      else if (msg.includes('soil')) response = 'Add organic compost and practice crop rotation.';

      resolve({ message: response, timestamp: new Date().toISOString() });
    }, 1000);
  });
};

export const getSuggestedQuestions = () => [
  'Which crop should I grow?',
  'How can I improve my soil?',
  'What are today prices?',
  'How to farm sustainably?',
];
