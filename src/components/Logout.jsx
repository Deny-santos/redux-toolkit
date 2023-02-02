import React from 'react'
import { Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { logout } from '../redux/userSlice'

const Logout = () => {
  const dispach = useDispatch()

    const handleLogout = () => {
        dispach(logout())
    }

  return (
    <div>
        <Button onClick={handleLogout} >Logout</Button>
    </div>
  )
}

export default Logout