import React, { useState } from "react";

export default function Upload() {

  const [text, setText] = useState("");
  const [submissionId, setSubmissionId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {

    if (!text.trim()) {
      alert("Please enter submission text");
      return;
    }

    try {

      setLoading(true);

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

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();

      console.log("Submission ID:", data.submission_id);

      setSubmissionId(data.submission_id);

      alert("Upload successful!");

    } catch (error) {

      console.error(error);
      alert("Upload failed. Check backend.");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Upload Submission</h1>

      <textarea
        rows="8"
        cols="60"
        placeholder="Paste your submission here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>

      {submissionId && (
        <div style={{ marginTop: "20px" }}>
          <strong>Submission ID:</strong> {submissionId}
        </div>
      )}

    </div>
  );
}