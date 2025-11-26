import React, { useEffect, useMemo, useState, useRef } from "react";

// Single-file React component: Memory Flip (matching cards) game
// Default export is `Game` so you can paste this into your existing file:
// src/Game.jsx and then import Game from './Game'

export default function Game() {
  const ICONS = useMemo(() => [
    "🍎","🍌","🍇","🍓","🍒","🍉","🍍","🥝"
  ], []); // 8 unique icons -> 16 cards

  function shuffle(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // initialize deck
  const initialDeck = useMemo(() => {
    const cards = ICONS.concat(ICONS).map((icon, idx) => ({
      id: idx + "_" + icon,
      icon,
      matched: false,
      flipped: false,
    }));
    return shuffle(cards);
  }, [ICONS]);

  const [deck, setDeck] = useState(initialDeck);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [lockBoard, setLockBoard] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // simple timer
    timerRef.current = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (first && second) {
      setLockBoard(true);
      setMoves(m => m + 1);
      if (first.icon === second.icon) {
        // match
        setDeck(d => d.map(c => (c.icon === first.icon ? { ...c, matched: true } : c)));
        setMatches(m => m + 1);
        resetTurnAfter(400);
      } else {
        // not match
        setTimeout(() => {
          setDeck(d => d.map(c => (c.id === first.id || c.id === second.id ? { ...c, flipped: false } : c)));
          resetTurn();
        }, 700);
      }
    }
  }, [first, second]);

  useEffect(() => {
    // game win condition
    if (matches === ICONS.length) {
      clearInterval(timerRef.current);
    }
  }, [matches, ICONS.length]);

  function resetTurn() {
    setFirst(null);
    setSecond(null);
    setLockBoard(false);
  }

  function resetTurnAfter(ms = 300) {
    setTimeout(() => {
      setFirst(null);
      setSecond(null);
      setLockBoard(false);
    }, ms);
  }

  function handleFlip(card) {
    if (lockBoard) return;
    if (card.flipped || card.matched) return;

    setDeck(d => d.map(c => (c.id === card.id ? { ...c, flipped: true } : c)));

    if (!first) {
      setFirst(card);
      return;
    }

    if (first && !second) {
      setSecond(card);
    }
  }

  function restart() {
    clearInterval(timerRef.current);
    setDeck(shuffle(initialDeck.map(c => ({ ...c, matched: false, flipped: false }))));
    setFirst(null); setSecond(null); setLockBoard(false);
    setMoves(0); setMatches(0); setTime(0);
    timerRef.current = setInterval(() => setTime(t => t + 1), 1000);
  }

  // small helper for formatting time mm:ss
  const formatTime = (s) => {
    const mm = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-3">Memory Flip — Game</h2>
      <div className="w-full max-w-xl bg-white rounded-xl p-4 shadow">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm">Moves: <strong>{moves}</strong></div>
          <div className="text-sm">Time: <strong>{formatTime(time)}</strong></div>
          <div className="text-sm">Matches: <strong>{matches}/{ICONS.length}</strong></div>
          <button onClick={restart} className="ml-2 px-3 py-1 bg-blue-500 text-white rounded">Restart</button>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {deck.map(card => (
            <button
              key={card.id}
              onClick={() => handleFlip(card)}
              className={`relative w-full aspect-[3/4] rounded-lg border overflow-hidden transform transition-transform duration-300 focus:outline-none ${card.flipped || card.matched ? "scale-100" : "scale-100"}`}
            >
              {/* card inner */}
              <div style={{
                perspective: 800,
                width: "100%",
                height: "100%",
              }}>
                <div style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.45s",
                  transform: card.flipped || card.matched ? "rotateY(180deg)" : "rotateY(0deg)",
                }}>

                  {/* front (hidden face) */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backfaceVisibility: "hidden",
                    background: "linear-gradient(135deg,#111827,#1f2937)",
                    color: "white",
                    fontSize: 28,
                    borderRadius: 10,
                  }}>
                    {/* cover design */}
                    <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: 22, fontWeight: 700}}>?</div>
                      <div style={{fontSize: 12, opacity: 0.8}}>Flip</div>
                    </div>
                  </div>

                  {/* back (revealed face) */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: "linear-gradient(135deg,#ecfeff,#f0f9ff)",
                    color: "#111827",
                    fontSize: 34,
                    borderRadius: 10,
                  }}>
                    {card.icon}
                  </div>

                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-3 text-xs text-gray-500">Click two cards to find a match. Simple, fast, no assets.</div>
      </div>

      {matches === ICONS.length && (
        <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-lg">Congrats! You finished in {moves} moves and {formatTime(time)}.</div>
      )}

    </div>
  );
}
