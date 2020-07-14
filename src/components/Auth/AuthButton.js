import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { useAuth } from "../../useAuth"

import "./styles.css"

const AuthButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const auth = useAuth()
  const history = useHistory()

  const toggle = () => setDropdownOpen((prevState) => !prevState)
  const signOut = async () => {
    await auth.signOut()
    history.push("/")
  }

  if (auth && auth.user) {
    return (
      <Dropdown
        className='AuthButton'
        inNavbar
        isOpen={dropdownOpen}
        toggle={toggle}
      >
        <DropdownToggle caret>Hi, {auth.user.email} </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>
            <Link to='/account'>My Account</Link>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={signOut}>Sign Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
  return (
    <Link className='nav-link' to='/sign-in'>
      Sign In
    </Link>
  )
}

export default AuthButton
