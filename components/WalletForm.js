import { useState } from 'react';

export default function WalletForm() {
  const [wallet, setWallet] = useState('');
  const [data, setData] = useState(null);

  const fetchWalletData = async () => {
    const response = await fetch(`https://caching.wayfinder.ai/api/walletstats/${wallet}`);
    const result = await response.json();
    setData(result);
  };

  return (
    <div>
      <input type="text" placeholder="Enter Wallet Address" value={wallet} onChange={(e) => setWallet(e.target.value)} />
      <button onClick={fetchWalletData}>Fetch Data</button>
      {data && (
        <div>
          <p>Total Points: {data.totalPoints}</p>
          <p>Daily Points: {data.dailyPoints}</p>
        </div>
      )}
    </div>
  );
}
