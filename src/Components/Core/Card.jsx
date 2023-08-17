import React from 'react'

const Card = (props) => {
  return (
   
      <div className="card mx-4 my-2 position-relative" style={{width:'18rem' }}>
        
  <img src={props.src} className="card-img-top " alt={props.alt} style={{ width: '250px', height: '260px' }} />
  <div className="card-body mb-4" style={{}}>
    <div className="card-body-text mb-4" style={{height:'150px'}}>
    <h5 className="card-title">{props.Title}</h5>
    <h5 className="card-text">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
</svg>{props.Price} 
    </h5>
    <p>Rating:-{props.Rating}</p>

    </div>
    <button className="btn btn-warning" value={props.value}  onClick={props.onClick}> 
      Add To Cart
    </button>
  </div>
</div>
   
  )
}

export default Card
