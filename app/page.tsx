"use client";

import { useState } from "react";

export default function Home() {
  const [showMovies, setShowMovies] = useState(false);

  return (
    <main>
      {!showMovies ? (
        <button onClick={() => setShowMovies(true)}>
          映画2025
        </button>
      ) : (
        <div>
          <h1>映画2025</h1>

          <button onClick={() => setShowMovies(false)}>
            戻る
          </button>
        </div>
      )}
    </main>
  );
}