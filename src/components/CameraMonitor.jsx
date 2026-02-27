import React, { useRef, useEffect } from "react";
import { FaceMesh } from "@mediapipe/face_mesh";
import { Camera } from "@mediapipe/camera_utils";

export default function CameraMonitor() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const faceMesh = new FaceMesh({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMesh.setOptions({
      maxNumFaces: 2,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMesh.onResults((results) => {
      if (!results.multiFaceLandmarks) {
        console.log("❌ No face detected");
        return;
      }

      if (results.multiFaceLandmarks.length > 1) {
        console.log("🚨 Multiple faces detected");
      } else {
        console.log("✅ Single face detected");
      }
    });

    const camera = new Camera(videoRef.current, {
      onFrame: async () => {
        await faceMesh.send({ image: videoRef.current });
      },
      width: 640,
      height: 480,
    });

    camera.start();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>AI Proctoring Camera</h2>
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{
          width: "640px",
          height: "480px",
          borderRadius: "10px",
          border: "2px solid #444"
        }}
      />
    </div>
  );
}