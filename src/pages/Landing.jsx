import React from "react";
import { useAppContext } from "../context/AppContext";

export default function Landing() {

  const { setCurrentPage } = useAppContext();

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0f172a",
      color: "white"
    }}>

      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Rubric AI
      </h1>

      <button
        onClick={() => setCurrentPage("upload")}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        Start Evaluation
      </button>

    </div>
  );
}