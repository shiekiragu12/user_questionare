"use client";
import useChat from '@/app/hooks/useChat';

export default function ChatInterface() {
  const {
    messages,
    isLoading,
    error,
    sendMessage,
    model,
    setModel,
    temperature,
    setTemperature,
    clearChat
  } = useChat();

  return (
    <div className="space-y-4">
      {/* Model Selection */}
      <select 
        value={model}
        onChange={(e) => setModel(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
        <option value="gpt-4">GPT-4</option>
      </select>

      {/* Temperature Control */}
      <div>
        <label>Temperature: {temperature}</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
        />
      </div>

      {/* Chat Messages */}
      {messages.map((message, index) => (
        <div key={index} className={`p-4 rounded-lg ${
          message.role === 'user' 
            ? 'bg-blue-100' 
            : 'bg-gray-100'
        }`}>
          <p>{message.content}</p>
          <p className="text-gray-500 text-xs">
            {message.timestamp.toLocaleTimeString()} | 
            Model: {message.metadata?.model} | 
            Tokens: {message.metadata?.tokensUsed}
          </p>
        </div>
      ))}

      {/* Error Display */}
      {error && <div className="text-red-500">{error}</div>}

      {/* Input Area */}
      <input
        type="text"
        disabled={isLoading}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage(e.currentTarget.value)}
      />
    </div>
  );
}