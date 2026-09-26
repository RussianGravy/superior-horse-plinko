import React from 'react'

// TODO: point this at the original Horse Plinko game
const ORIGINAL_GAME_URL = 'https://www.horseplinko.com'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="credits">
        <span>Created by the brothers: Valentine and Leon</span>
      </div>
      <a className="play-original" href={ORIGINAL_GAME_URL} target='__'>
        <h2 className="play-original-title">Play Original Horse Plinko!</h2>
        <div className="play-original-preview" aria-hidden="true">
          <div className="preview-card">
            <span className="preview-title">Horse Plinko</span>
            <span className="preview-button">Play Game</span>
            <span className="preview-button">View Instructions</span>
            <img className="preview-horse" src="/horse.png" alt="" />
          </div>
        </div>
      </a>
    </footer>
  )
}
