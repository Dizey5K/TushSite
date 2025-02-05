import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound: React.FC = () => {
  return (
    <div>
      <h1>404 - Страница не найдена</h1>
      <p>
        Пожалуйста, вернитесь на <Link to="/home">главную страницу</Link>.
      </p>
    </div>
  )
}
