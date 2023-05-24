import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

function Header() {
  return (
    <div className={s.header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
    </div>
  )
}

export default Header