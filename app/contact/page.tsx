import React from 'react';
import Navbar from "@/components/Navbar";
import QuestionAnswer from "@/components/QuestionAnswer";
import EmailCustomerService from '@/components/EmailCustomerService';
import CustomerSupport from "@/components/CustomerSupport"
import Newsletter from "@/components/Newsletter";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <QuestionAnswer />
        <EmailCustomerService/>
        <CustomerSupport/>
         <Newsletter />
      </main>
    </div>
  );
}