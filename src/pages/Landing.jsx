import React from "react";

export default function Landing({ navigate }) {

  return (
    <div style={{ padding: 40 }}>

      <h1>RubricAI Pro</h1>

      <button onClick={() => navigate("upload")}>
        Start Evaluation
      </button>

    </div>
  );
}