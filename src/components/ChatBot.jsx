import React, { useEffect, useState } from 'react';

const Chatbot = () => {
  const [chatbotLoaded, setChatbotLoaded] = useState(false);

  useEffect(() => {
    // Function to load external chatbot script
    const loadChatbotScript = () => {
      const script = document.createElement('script');
      script.src = "https://chatbot-dist.s3.us-east-2.amazonaws.com/chatbot/v2_build_chatbot.js";
      script.async = true;
      script.setAttribute('chatbotId', '4a37f3fa-e98a-4149-8d1a-a871ab229378');
      
      script.onload = () => {
        console.log('Chatbot script loaded successfully');
        setChatbotLoaded(true);
      };

      script.onerror = () => {
        console.error('Failed to load chatbot script');
      };

      document.body.appendChild(script);

      // Cleanup function
      return () => {
        document.body.removeChild(script);
      };
    };

    // Load the script
    loadChatbotScript();
  }, []);

  return (
    <div 
      style={{
        position: 'fixed', 
        bottom: '20px', 
        right: '20px', 
        zIndex: 1000
      }}
    >
      {chatbotLoaded && (
        <button 
          onClick={() => {
            // Custom logic to open chatbot if needed
            window.dispatchEvent(new Event('open-chatbot'))
          }}
          className="chatbot-trigger"
        >
          Chat with Us
        </button>
      )}
    </div>
  );
};

export default Chatbot;