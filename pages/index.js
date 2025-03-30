import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/globals.css";

export default function Home() {
  const router = useRouter();
  const [assumedTGE, setAssumedTGE] = useState("2025-03-31");
  const [tgeUnlock, setTGEUnlock] = useState(18);
  const [cachingIncrease, setCachingIncrease] = useState(0);

  return (
    <div className="container">
      <h1>Prompt Token Calculator</h1>
      <div className="input-group">
        <label>Assumed TGE Date</label>
        <input
          type="date"
          value={assumedTGE}
          onChange={(e) => setAssumedTGE(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Assumed TGE Unlock (%)</label>
        <input
          type="number"
          value={tgeUnlock}
          onChange={(e) => setTGEUnlock(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Assumed Caching Increase (%)</label>
        <input
          type="number"
          value={cachingIncrease}
          onChange={(e) => setCachingIncrease(e.target.value)}
        />
      </div>
      <button onClick={() => router.push(`/results?assumedTGE=${assumedTGE}&tgeUnlock=${tgeUnlock}&cachingIncrease=${cachingIncrease}`)}>Next →</button>
    </div>
  );
}
