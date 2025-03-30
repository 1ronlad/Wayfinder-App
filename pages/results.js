import { useRouter } from "next/router";
import { useState } from "react";

export default function Results() {
  const router = useRouter();
  const { assumedTGE, tgeUnlock, cachingIncrease } = router.query;
  const [wallet, setWallet] = useState("");
  const [points, setPoints] = useState(null);

  const fetchPoints = async () => {
    const res = await fetch(`https://caching.wayfinder.ai/api/walletstats/${wallet}`);
    const data = await res.json();
    setPoints(data);
  };

  return (
    <div className="container">
      <h1>Wallet Token Projection</h1>
      <input
        type="text"
        placeholder="Enter Wallet Address"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
      />
      <button onClick={fetchPoints}>Fetch Data</button>

      {points && (
        <div>
          <p>Total Points: {points.totalPoints}</p>
          <p>Daily Points: {points.dailyPoints}</p>
          {/* Perform calculations here */}
        </div>
      )}
      <button onClick={() => router.push("/")}>← Back</button>
    </div>
  );
}
