import { useState } from 'react';
import WalletForm from '../components/WalletForm';

export default function WalletPage() {
  return (
    <div className="container">
      <h1>Enter Your Wallet Address</h1>
      <WalletForm />
    </div>
  );
}
