import React from 'react'
import { Link } from 'react-router-dom'
export default function RegisterView() {
  return (
    <>
    <div>
      <h1>hola putaA</h1>
    </div>
    <nav>
        <Link to="/auth/login">
            Ya tienes cuenta? Inicias Sesion
        </Link>
    </nav>
    </>
  )
}
