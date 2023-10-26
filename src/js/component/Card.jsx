import React from 'react'

const Card = (props) => {
  return (
    <div className="card" style={{width: "18rem"}}>
    <img src= {props.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.paragraph}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default Card