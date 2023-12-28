import React from 'react'
import { CheckCircle, LogIn } from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'

function RegisterConfirmation() {
  const navigate = useNavigate();
  return (
    <div>
        <h2>Успешна регистрация <CheckCircle></CheckCircle></h2>
        <Link to="/login">Влез в акаунт</Link>
    </div>
  )
}

export default RegisterConfirmation