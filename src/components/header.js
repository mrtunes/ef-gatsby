import React from "react"
import { Link } from "gatsby"
import { Navbar } from "react-bootstrap"

const header = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Link
          to="/"
          style={{
            fontSize: "1.7rem",
            fontWeight: 500,
            color: "black",
            textDecoration: "none",
          }}
        >
          Elliott Fienberg
        </Link>
      </Navbar.Brand>
    </Navbar>
  )
}

export default header
