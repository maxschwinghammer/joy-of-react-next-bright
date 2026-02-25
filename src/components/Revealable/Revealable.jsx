"use client";
import React from "react";

function Revealable({ children }) {
  const [isShown, setIsShown] = React.useState(false);

  return (
    <div>
      {isShown ? (
        children
      ) : (
        <div className="reveal">
          <button onClick={() => setIsShown(true)}>Reveal Content</button>
        </div>
      )}
    </div>
  );
}

export default Revealable;
