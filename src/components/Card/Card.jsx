import React from "react";
import "./Card.css";

const Card =()=>{

    return(
       <div className="container-wrap">
            <div className ="card">
                <div className="front-card">

                </div>
                <div className="back-card">
                    <div className="movie-info">
                        <h2>Toy Story</h2>
                        <hr></hr>
                        <h4><i class="fa-solid fa-language"></i><strong>Idiomas: </strong>español, inglés, alemán</h4>
                        <h4><i class="fa-light fa-camera-movie"></i><strong>Géneros: </strong> infantil, fantasía, comedia, aventura, animación</h4>
                        <button>Ver más</button>

                    </div>
                </div>
            </div>

       </div>
      
    )
}

export default Card;