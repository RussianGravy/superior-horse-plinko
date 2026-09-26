import React from 'react'

// Each horse gets its own lane, speed, and start offset so they don't fall in sync
const HORSES = {
  left: [
    { left: '15%', duration: 7, delay: 0 },
    { left: '45%', duration: 9, delay: -4.5 },
  ],
  right: [
    { left: '35%', duration: 8, delay: -2 },
    { left: '10%', duration: 10, delay: -7 },
  ],
}

export default function PlinkoSide({ side }) {
  return (
    <aside className={`plinko-side plinko-side--${side}`} aria-hidden="true">
      <div className="horse-viewport">
        {HORSES[side].map((horse, i) => (
          <div
            key={i}
            className="horse-fall"
            style={{
              left: horse.left,
              animationDuration: `${horse.duration}s`,
              animationDelay: `${horse.delay}s`,
            }}
          >
            <img
              className="horse-bounce"
              src="/horse.png"
              alt=""
              style={{
                animationDuration: `${horse.duration / 4}s`,
                animationDelay: `${horse.delay}s`,
              }}
            />
          </div>
        ))}
      </div>
      <img className="side-fire" src="/fire.png" alt="" />
    </aside>
  )
}
