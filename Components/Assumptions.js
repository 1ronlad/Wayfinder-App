import { useState } from 'react';

export default function Assumptions() {
  const [tgeDate, setTgeDate] = useState('2025-03-31');
  const [tgeUnlock, setTgeUnlock] = useState(18);
  const [cachingIncrease, setCachingIncrease] = useState(0);

  const totalTokens = 1000000000;
  const tokensForCachers = 400000000;
  const tokensDisbursedOnTGE = (tgeUnlock / 100) * tokensForCachers;

  return (
    <div className="assumptions">
      <h2>Key Considerations</h2>
      <div>
        <label>Assumed TGE Date:</label>
        <input type="date" value={tgeDate} onChange={(e) => setTgeDate(e.target.value)} />
      </div>
      <div>
        <label>Assumed TGE Unlock %:</label>
        <input type="number" value={tgeUnlock} onChange={(e) => setTgeUnlock(Number(e.target.value))} />
      </div>
      <div>
        <label>No Increase in Caching % or Daily Points:</label>
        <input type="number" value={cachingIncrease} onChange={(e) => setCachingIncrease(Number(e.target.value))} />
      </div>
      <p>Total Tokens Disbursed on TGE: {tokensDisbursedOnTGE.toLocaleString()}</p>
    </div>
  );
}
