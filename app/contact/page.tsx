import React from 'react';
import Navbar from "@/components/Navbar";
import QuestionAnswer from "@/components/QuestionAnswer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <QuestionAnswer />
      </main>
    </div>
  );
}