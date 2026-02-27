import React, { useState } from "react";
import Landing from "./pages/Landing";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";

export default function App() {

  const [page, setPage] = useState("landing");
  const [submissionId, setSubmissionId] = useState(null);

  const navigate = (pageName) => {
    setPage(pageName);
  };

  return (
    <div>

      {page === "landing" && (
        <Landing navigate={navigate} />
      )}

      {page === "upload" && (
        <Upload
          navigate={navigate}
          setSubmissionId={setSubmissionId}
        />
      )}

      {page === "dashboard" && (
        <Dashboard submissionId={submissionId} />
      )}

    </div>
  );
}