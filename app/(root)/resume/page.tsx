"use client";
import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    // Redirect to Google Drive resume
    window.location.href = "https://drive.google.com/file/d/1Nw3uWh_dZCmr95YPhos-6chIv4HF5Etd/view?usp=sharing";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to resume...</p>
      </div>
    </div>
  );
}
