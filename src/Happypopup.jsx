import React, { useState } from "react";

export default function HappyPopup() {
  const defaultPosition = {
    top: 45,
    left: 260,
  };

  const [noPosition, setNoPosition] = useState(defaultPosition);

  const moveNoButton = () => {
    const maxX = 380;
    const maxY = 100;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setNoPosition({
      top: randomY,
      left: randomX,
    });

    // Return to original position
    setTimeout(() => {
      setNoPosition(defaultPosition);
    }, 1000);
  };

  const handleYes = () => {
    alert("Yayyyy 💖 I knew it 😍✨");
  };

  return (
    <>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      />

      <div style={styles.body}>
        <div style={styles.popup}>
          <h2 style={styles.heading}>Are You Happyyy? 💖</h2>

          <div style={styles.buttonContainer}>
            <button style={styles.yesBtn} onClick={handleYes}>
              Yes 😍
            </button>

            <button
              style={{
                ...styles.noBtn,
                top: noPosition.top,
                left: noPosition.left,
              }}
              onMouseEnter={moveNoButton}
            >
              No 😅
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  body: {
    margin: 0,
    padding: 0,
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #ffdde1, #ee9ca7)",
    fontFamily: "'Pacifico', cursive",
    overflow: "hidden",
  },

  popup: {
    width: "520px",
    height: "220px",
    background: "linear-gradient(to right, #ffdde1, #ee9ca7)",
    borderRadius: "28px",
    position: "relative",
    boxShadow: "0 12px 35px rgba(0,0,0,0.25)",
    overflow: "hidden",
  },

  heading: {
    textAlign: "center",
    color: "#ff4f81",
    fontSize: "32px",
    marginTop: "25px",
  },

  buttonContainer: {
    position: "relative",
    width: "100%",
    height: "140px",
  },

  yesBtn: {
    position: "absolute",
    top: "45px",
    left: "110px",
    padding: "12px 30px",
    border: "none",
    borderRadius: "14px",
    background: "#ff4f81",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    fontFamily: "'Pacifico', cursive",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },

  noBtn: {
    position: "absolute",
    padding: "12px 30px",
    border: "none",
    borderRadius: "14px",
    background: "#666",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    transition: "0.3s",
    fontFamily: "'Pacifico', cursive",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },
};