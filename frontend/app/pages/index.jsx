"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css'; 


const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/client/page');
  }, [router]);

  return null;
};

export default HomePage;
