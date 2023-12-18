import React, { useEffect } from 'react';
import {Link} from "react-router-dom"
import cd from "./cd.png"
import gr from "./gr.png"
import he from "./he.png"
import ho from "./ho.png"
import me from "./me.png"

import logo from "../../../public/Ciclos final - logo S PNG.png"
import "./head.css"

function Head() {

  


  

 


  return (
<nav className='nav'> 

<a href='#home' ><img className='logos' src={logo}></img></a>



<div className='item-cont'>

<a href='#us' ><div className="items"> <img className='emot' src={ho}></img> Home </div></a>
  <a href='#us' ><div className="items"> <img className='emot' src={he}></img> Servicios </div></a>
  <a href='#proyecto' ><div className="items"> <img  className='emot' src={gr}></img> Equipo</div></a>
  <a href='#proyecto' ><div className="items"> <img className='emot' src={cd}></img> Proyectos </div></a>
  <a href='#final' ><div className="items"> <img className='emot' src={me}></img> Contacto </div></a>
  

</div>

<script type="text/javascript">{
		window.addEventListener("scroll", function(){
			var header = document.querySelector("nav");
			header.classList.toggle("abajo",window.scrollY>0);

      var items = document.querySelector("items");
			items.classList.toggle("abajo",window.scrollY>0);
		})}
	</script>

</nav>
  )
}

export default Head
