import React from "react";
import "./Footer.css";

const Footer =()=>{
    return(
        <div className="footer">
            <div className = "footer section">
                <div className = "footer-links">
                    <div className = "footer-links_div">
                        <div className= "footer-below-links">
                        <a href= "#"><div><p>Estrenos</p></div></a>
                        <a href= "#"><div><p>Reservar</p></div></a>
                        <a href= "#"><div><p>Información</p></div></a>
                        <a href= "#"><div><p>Contacto</p></div></a>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="footer-below">
                    <div className ="footer-copyright">
                        <p>©{new Date().getFullYear()} Cine Unimet. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;