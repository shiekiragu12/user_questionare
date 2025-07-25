"use client";

import { Message } from '@/app/hooks/useChat';

interface ChatHistoryProps {
  history: Message[];
  onSelect: (message: string) => void;
}

export default function ChatHistory({ history, onSelect }: ChatHistoryProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="mb-2 font-semibold text-lg">Chat History</h3>
      {history.length === 0 ? (
        <p className="text-gray-500">No history yet</p>
      ) : (
        <ul className="space-y-2">
          {history.map((item, index) => (
            <li
              key={index}
              className="hover:bg-gray-200 p-2 rounded cursor-pointer"
              onClick={() => onSelect(item.content)}
            >
              <div className="text-sm truncate">{item.content}</div>
              <div className="text-gray-500 text-xs">
                {new Date(item.timestamp).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}