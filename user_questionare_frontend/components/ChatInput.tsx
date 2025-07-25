"use client";

import { useState } from 'react';
import { Button } from './ui/button';

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl">
      <div className="relative">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-4 pr-16 border border-gray-300 focus:border-amber-500 rounded-lg focus:ring-2 focus:ring-amber-200 w-full resize-none"
          rows={3}
          placeholder="Ask me anything..."
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading || !message.trim()}
          className="right-2 bottom-2 absolute bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 p-2 rounded-lg text-white transition-colors disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </form>
  );
}