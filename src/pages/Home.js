import React, { Fragment } from 'react'
import '../components/home.css'
import { Link } from 'react-router-dom'
//import CartWidget from '../components/CartWidget/CartWidget'

const Home = () => {
  const navbarItems = [
    {
      path: "/novedades",
      name: "Novedades"
    },
    {
      path: "/clasicos",
      name: "Clásicos"
    },
    {
      path: "/usados",
      name: "Usados"
    },
    {
      path: "/curiosidades",
      name: "Curiosidades"
    },
    {
      path: "/ver-todo",
      name: "Ver todo"
    },
  ]

  return (
    <Fragment>
      <div className="container-container">
        {navbarItems.map(({ path, name }) => (
          <Link className="container-link" to={path} ><h6 className="link-home">{name}</h6></Link>
        ))}
      </div>

    </Fragment >
  )
}

export default Home
