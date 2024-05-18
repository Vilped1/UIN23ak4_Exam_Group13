import React from "react"
import Header from "./Header"

export default function Layout({ children, activeUser }) {
  return (
    <div>
      <Header activeUser={activeUser} />
      {children}
    </div>
  )
}
