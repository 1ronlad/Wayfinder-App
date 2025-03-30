import { useState } from 'react';
import Assumptions from '../components/Assumptions';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="container">
      <h1>Wayfinder Token Calculator</h1>
      <Assumptions />
      <button onClick={() => router.push('/wallet')} className="next-button">→</button>
    </div>
  );
}
