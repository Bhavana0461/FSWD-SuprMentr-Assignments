import React, { useState } from "react";

function App() {
  const [mood, setMood] = useState("");

  return (
    <div style={styles.container}>
      <h1>Mood Tracker 😊</h1>

      <h2>Your Mood: {mood}</h2>

      <div style={styles.buttons}>
        <button onClick={() => setMood("😊 Happy")} style={styles.btn}>Happy</button>
        <button onClick={() => setMood("😢 Sad")} style={styles.btn}>Sad</button>
        <button onClick={() => setMood("😡 Angry")} style={styles.btn}>Angry</button>
        <button onClick={() => setMood("😴 Tired")} style={styles.btn}>Tired</button>
      </div>
    </div>
  );
}

// Simple styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial"
  },
  buttons: {
    marginTop: "20px"
  },
  btn: {
    margin: "10px",
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default App;