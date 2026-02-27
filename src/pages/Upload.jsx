import React, { useState } from "react";

export default function Upload() {

  const [text, setText] = useState("");

  const handleUpload = async () => {

    const response = await fetch("http://localhost:8000/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: text
      })
    });

    const data = await response.json();

    console.log("Submission ID:", data.submission_id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Upload Submission</h1>

      <textarea
        rows="6"
        cols="60"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste submission here..."
      />

      <br /><br />

      <button onClick={handleUpload}>
        Upload
      </button>

    </div>
  );
}