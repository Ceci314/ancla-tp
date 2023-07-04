var cad = `<a name="arriba"><div class="encabezado">
<img class="logo" src="./IMG/logo.png"/>
<h1>Instituto Ancla Salud</h1>
</div>
</a>
<nav>
<ul class="menu">
    <li class="menu-item"><a class="menuAncla" href="./index.html" rel="Inicio">Inicio</a></li>
    <li class="menu-item"><a class="menuAncla" href="./presenciales.html" rel="Cursos Presenciales">Cursos Presenciales</a></li>
    <li class="menu-item"><a class="menuAncla" href="./virtuales.html"  rel="Cursos Virtuales">Cursos Virtuales</a></li>
    <li class="menu-item"><a class="menuAncla" href="./contacto.html"  rel="Contacto">Contacto</a></li>
    <li class="menu-item"><a class="menuAncla" href="#"  rel="Carrito"><img src="./IMG/anadir-al-carrito.png" alt="Comprar Curso" id=carrito></a></li>
</ul>
</nav>`

document.getElementById("Idheader").innerHTML = cad; 

var cad2=`<div class="pie">
<div class="ubicacion">
    <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3855016182442!2d-58.40455698489253!3d-34.59441218046191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca908d89b80f%3A0xdd304872ef2d09e0!2sAv.%20Sta.%20Fe%20%26%20Av.%20Pueyrred%C3%B3n%2C%20C1015%20CABA!5e0!3m2!1ses!2sar!4v1668449795791!5m2!1ses!2sar" width="80" height="40" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe>
    </iframe>
    <p class="domicilio"> Domicilio: Avenida Pueyrredon 1425, CABA <br> Teléfono: +54 (011) 4805 2239 </p> 
</div> 

<div class="social">
    <a  href="#"><img class="red-social" src="./IMG/001-facebook.png" alt="facebook"></a>
    <a  href="#"><img class="red-social" src="./IMG/002-whatsapp.png" alt="whatsapp"></a>
    <a  href="#"><img class="red-social" src="./IMG/003-instagram.png" alt="instagram"></a>
    <a  href="#"><img class="red-social" src="./IMG/004-gorjeo.png" alt="twitter"></a>
</div>            
        
<div>
    <a class="anclaInicio" href="#arriba"><img src="./IMG/flecha-arriba.png" alt="Inicio" class="anclaArriba"></a>
</div>

<div class="registrado"><h5>Todos los derechos reservados Grupo 12 Comision 23018</h5></div> 
</div>`

document.getElementById("idfooter").innerHTML = cad2; 

