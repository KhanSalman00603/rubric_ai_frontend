import React from "react";
import CameraMonitor from "../components/CameraMonitor.jsx";

export default function Viva() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>RubricAI Pro Viva Session</h1>

      <p>
        This module monitors student behavior using AI proctoring and generates
        viva questions based on submission evaluation.
      </p>

      <CameraMonitor />

      <div style={{ marginTop: "20px" }}>
        <h3>Question 1:</h3>
        <p>Explain your submission in your own words.</p>

        <textarea
          rows="4"
          cols="60"
          placeholder="Type your answer..."
        />

        <br /><br />

        <button>Submit Response</button>
      </div>
    </div>
  );
}