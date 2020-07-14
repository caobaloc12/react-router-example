import React from "react"

const Footer = () => {
  return (
    <div
      className='container pt-1'
      style={{
        height: 50,
        display: "flex",
        alignItems: "center",
        borderTop: "1px solid #eee",
      }}
    >
      <span>&copy;</span>
      <span className='ml-1' style={{ fontSize: ".9em" }}>
        {new Date().getFullYear()}
      </span>
    </div>
  )
}

export default Footer
