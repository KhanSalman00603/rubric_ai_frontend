import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {

  const [submissionId, setSubmissionId] = useState(null);

  const [evaluationResult, setEvaluationResult] = useState(null);

  const [behaviorState, setBehaviorState] = useState({
    cheating: false,
    emotion: "neutral",
    confidence: 0
  });

  const [currentPage, setCurrentPage] = useState("landing");

  return (
    <AppContext.Provider value={{
      submissionId,
      setSubmissionId,
      evaluationResult,
      setEvaluationResult,
      behaviorState,
      setBehaviorState,
      currentPage,
      setCurrentPage
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}