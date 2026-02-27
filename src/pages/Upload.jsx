import React, { useState } from "react";

export default function Upload({ navigate, setSubmissionId }) {

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {

    setLoading(true);

    try {

      const response = await fetch(
        "https://rubricai-pro.onrender.com/api/upload",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            text: text
          })
        }
      );

      const data = await response.json();

      setSubmissionId(data.submission_id);

      navigate("dashboard");

    } catch (error) {

      alert("Upload failed");

    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 40 }}>

      <h2>Upload Submission</h2>

      <textarea
        rows="8"
        cols="60"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={handleUpload}>
        {loading ? "Uploading..." : "Upload"}
      </button>

    </div>
  );
}