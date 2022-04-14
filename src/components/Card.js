export default function Card(props){
  
  let {name, email, descripcion, phone, website} = props.persona;
  console.log(props.persona)
  
      return(
  
    <div class="card text-center">
    <div className="container">
    <div className="row">
      <div className="col-md-4">
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h6 className="phone">{phone}</h6>
      <h7 className="email">{email}</h7>
      <p className="website">{website}</p>
      <p className="descripcion">{descripcion}</p>
      <a href="#" class="card-link">Facebook</a>
      <a href="#" class="card-link">WhatssAp</a>
      <a href="#" class="card-link">Instagram</a>

    </div>
    </div>
    </div>
    </div>
  </div>
  </div>
 
      );
  }