import React from "react"
import { Link } from 'react-router-dom';

const NotFound = () => {
  return(
    <div>
      <h1>The Link you have followed does not exist.</h1>
      <Link to="/">Return Home</Link>
    </div>
  )
}

export default NotFound