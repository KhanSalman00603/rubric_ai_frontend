import React, { useState } from "react";

export default function Dashboard({ submissionId }) {

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runEvaluation = async () => {

    setLoading(true);

    const response = await fetch(
      `https://rubricai-pro.onrender.com/api/evaluate/${submissionId}`,
      {
        method: "POST"
      }
    );

    const data = await response.json();

    setResult(data);

    setLoading(false);
  };

  return (
    <div style={{ padding: 40 }}>

      <h2>Dashboard</h2>

      <p>Submission ID: {submissionId}</p>

      <button onClick={runEvaluation}>
        Run AI Evaluation
      </button>

      {loading && <p>Evaluating...</p>}

      {result && (
        <div>

          <h3>Results</h3>

          <p>Total Score: {result.total_score}</p>
          <p>Clarity: {result.clarity}</p>
          <p>Technical Depth: {result.technical_depth}</p>
          <p>Originality: {result.originality}</p>
          <p>Feedback: {result.feedback}</p>

        </div>
      )}

    </div>
  );
}