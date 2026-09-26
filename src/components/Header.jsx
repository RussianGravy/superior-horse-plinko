import React from 'react'
import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/game', label: 'Game' },
  { to: '/history', label: 'History' },
  { to: '/extra', label: 'Extra' },
]

export default function Header() {
  return (
    <header className="site-header">
      <h1 className="site-title">HORSE PLINKO</h1>
      <h2 className="site-subtitle">Coming Soon</h2>
      <nav className="site-nav">
        {/* {NAV_LINKS.map(({ to, label }) => (
          <NavLink key={to} to={to} end className="nav-button">
            {label}
          </NavLink>
        ))} */}
      </nav>
    </header>
  )
}
