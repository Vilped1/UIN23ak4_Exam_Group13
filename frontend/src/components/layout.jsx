import React from "react"
import Header from "./Header"
import MovieCard from "./MovieCard"

export default function Layout({ children, activeUser }) {
  return (
    <div>
      <Header activeUser={activeUser} />
      <MovieCard />
      {children}
    </div>
  )
}
