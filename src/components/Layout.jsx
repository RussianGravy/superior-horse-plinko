import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import PlinkoSide from './PlinkoSide'

export default function Layout() {
  return (
    <div className="layout">
      <PlinkoSide side="left" />
      <div className="center-column">
        <Header />
        <main className="page-content">
          <Outlet />
        </main>
        <Footer />
      </div>
      <PlinkoSide side="right" />
    </div>
  )
}
