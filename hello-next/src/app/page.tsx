'use client'
import Image from "next/image";
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    import('@youness-dev7/my-design-system');
  }, []);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <p className="text-4xl font-bold text-blue-600">Input e buttone del design system</p>
      <my-input></my-input>
      <my-button label="Invia"></my-button>
    </div>
  
  );
}
