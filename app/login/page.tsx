"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import PersonalArea from "@/components/PersonalArea";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F1EAE5]">
      <Navbar />
      
      <main>
    <PersonalArea />
      </main>
      <Newsletter />
    </div>
  );
}