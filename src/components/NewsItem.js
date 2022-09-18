import React from 'react'

export default function NewsItem(props) {
  return (
    <div>
    <div className="card" style={{ width: "100%" ,display:"flex",flexDirection:"flex-column"}}>

      <img src={!props.imgUrl ? "https://cdn.abcotvs.com/dip/images/12090293_080122-wls-hampshire-crash-wade-stnrgr430a-vid.jpg?w=1600" : props.imgUrl} className="card-img-top" alt="..." />
      <div className="card-body" style={{ zIndex: "1" }}>
       
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "90%" }}>
          {props.source}
        </span>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text"><small className="text-muted">By {props.author} {new Date(props.date).toGMTString()}</small></p>

        <a href={props.newsId} className="btn btn-primary">Read More</a>
      </div>
    </div>

  </div>
  )
}
