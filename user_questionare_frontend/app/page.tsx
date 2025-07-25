
"use client";

import useChat from "@/app/hooks/useChat";
import ChatInput from "@/components/ChatInput";
import ChatHistory from "@/components/ChatHistory";
import ChatMessage from "@/components/ChatMessage";

export default function Home() {
  const {
    messages,
    isLoading,
    error,
    sendMessage
  } = useChat();

  return (
    <div className="flex flex-col items-center gap-8 bg-white p-8 sm:p-20 min-h-screen font-sans">
      <div className="w-full max-w-3xl">
        <ChatHistory history={messages} onSelect={() => {}} />
      </div>
      <div className="flex-1 w-full max-w-3xl overflow-y-auto">
        {messages.length === 0 ? (
          <div className="mt-8 text-gray-400 text-center">No messages yet. Start the conversation!</div>
        ) : (
          <>
            {messages.map((msg, idx) => <ChatMessage key={idx} message={msg} />)}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-200 px-4 py-2 rounded-lg rounded-bl-none max-w-3xl text-gray-800">
                  <span className="inline-block w-6 h-4 align-middle">
                    <span className="inline-block bg-amber-500 rounded-full w-1 h-1 animate-bounce [animation-delay:0s]"></span>
                    <span className="inline-block bg-amber-500 mx-1 rounded-full w-1 h-1 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="inline-block bg-amber-500 rounded-full w-1 h-1 animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </div>
              </div>
            )}
          </>
        )}
        {error && <div className="mt-2 text-red-500 text-center">{error}</div>}
      </div>
      <div className="w-full max-w-3xl">
        <ChatInput onSend={sendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
