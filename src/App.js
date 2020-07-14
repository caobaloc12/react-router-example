import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "./layouts/Header"
import { routes, renderRoutes } from "./routes"
import Footer from "./layouts/Footer"
import { useAuth } from "./useAuth"
import "./App.css"

function App() {
  const auth = useAuth()
  const isAuthenticated = auth && auth.user
  return (
    <Router>
      <React.Suspense fallback={<div />}>
        <Header />
        <div
          className='container pt-5'
          style={{
            minHeight: "calc(100vh - 120px)",
          }}
        >
          {renderRoutes(routes, isAuthenticated)}
        </div>
        <Footer />
      </React.Suspense>
    </Router>
  )
}

export default App
