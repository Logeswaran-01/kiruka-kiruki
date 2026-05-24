import React, { useState } from "react";

export default function Video() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div style={styles.container}>
      {!showVideo ? (
        <button
          style={styles.button}
          onClick={() => setShowVideo(true)}
        >
          Open Surprise 🎥💖
        </button>
      ) : (
        <div style={styles.popup}>
          <video
            controls
            autoPlay
            style={styles.video}
          >
            <source
              src="https://res.cloudinary.com/drhib3yg1/video/upload/v1779625788/video1_vveben.mp4"
              type="video/mp4"
            />
          </video>

          <button
            style={styles.closeBtn}
            onClick={() => setShowVideo(false)}
          >
            Close ❌
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    padding: "14px 30px",
    border: "none",
    borderRadius: "14px",
    background: "#ff4f81",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    fontFamily: "'Pacifico', cursive",
  },

  popup: {
    width: "700px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  },

  video: {
    width: "100%",
    borderRadius: "15px",
  },

  closeBtn: {
    padding: "10px 25px",
    border: "none",
    borderRadius: "10px",
    background: "#666",
    color: "white",
    cursor: "pointer",
  },
};