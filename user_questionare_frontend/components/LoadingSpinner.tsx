"use client";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="border-amber-500 border-t-2 border-b-2 rounded-full w-8 h-8 animate-spin"></div>
    </div>
  );
}