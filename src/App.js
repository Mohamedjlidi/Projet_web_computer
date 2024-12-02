import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [showAlert, setShowAlert] = useState(false); // État pour afficher l'alerte personnalisée
  const [animation, setAnimation] = useState("");

  const increment = () => {
    setCounter(counter + 1);
    setAnimation("increase");
    setTimeout(() => setAnimation(""), 200); // Réinitialiser après l'animation
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setAnimation("decrease");
      setTimeout(() => setAnimation(""), 200); // Réinitialiser après l'animation
    } else {
      setShowAlert(true); // Afficher l'alerte personnalisée
    }
  };

  const closeAlert = () => {
    setShowAlert(false); // Fermer l'alerte
  };

  return (
    <div className="container">
      <h1 className={`counter ${animation}`}>Compteur : {counter}</h1>
      <div>
        <button className="button decrement" onClick={decrement}>
          -
        </button>
        <button className="button increment" onClick={increment}>
          +
        </button>
      </div>

      {/* Alerte personnalisée */}
      {showAlert && (
        <div className="alert">
          <div className="alert-content">
            <p>Le compteur ne peut pas descendre en dessous de zéro !</p>
            <button className="alert-close" onClick={closeAlert}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
