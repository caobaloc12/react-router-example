import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap"

import Logo from "./Logo"
import { routes } from "../routes"
import AuthButton from "../components/Auth/AuthButton"

const MyNavbar = (_props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <Logo brandText='React App' />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              {routes
                .filter(
                  (route) =>
                    !["/sign-in", "/sign-out", "/"].includes(route.path)
                )
                .map((route) => (
                  <NavItem key={route.key}>
                    <Link className='nav-link' to={route.path}>
                      {route.label}
                    </Link>
                  </NavItem>
                ))}
            </Nav>
            <AuthButton />
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default MyNavbar
