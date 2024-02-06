'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import Header from '../assets/header';
import { useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const body = document.querySelector('body') as HTMLElement; // Assert type for body element

      if (scrollTop > 10) {
        body.classList.add('fixed-nav');
      } else {
        body.classList.remove('fixed-nav');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
        
        </body>
    </html>
  );
}
