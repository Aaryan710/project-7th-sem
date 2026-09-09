import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ChatWindow from '../components/ChatWindow';
import { sendChatMessage, getSuggestedQuestions } from '../services/chatService';

export default function AssistantPage({ language, setLanguage }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);

  useEffect(() => {
    setSuggestedQuestions(getSuggestedQuestions(language));
  }, [language]);

  const handleSendMessage = async (messageText) => {
    setMessages(prev => [...prev, { text: messageText, sender: 'user', timestamp: new Date() }]);
    setIsLoading(true);
    try {
      const response = await sendChatMessage(messageText, language);
      setMessages(prev => [...prev, { text: response.message, sender: 'ai', timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-agri-light flex flex-col">
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-agri-green mb-2">AI Agricultural Assistant</h1>
        <p className="text-gray-600 mb-6">Ask about crops, diseases, market prices, and sustainable farming.</p>
        <div className="bg-white rounded-lg shadow-lg" style={{ height: 'calc(100vh - 300px)' }}>
          <ChatWindow messages={messages} onSendMessage={handleSendMessage} isLoading={isLoading} suggestedQuestions={suggestedQuestions} />
        </div>
      </main>
    </div>
  );
}
