
var misNoticias = (function() {

  // entorno privado
  $("#miboton-mostrar").prop("disabled", true);
  // Creamos un array para guardar las noticias
  var noticias = [];

  function limpiarCampo() {
  //  var form = document.getElementById('my-form')
  //  form.reset(); 
    $("#my-form").trigger("reset");
  }


  function agregarNoticia() {

    $("#miboton-mostrar").prop("disabled", false);

    // Constructor Noticia
    function Noticia() {
      this.titulo = "";
      this.cuerpo = "";
    }

    // Creamos un objeto Noticia asignado a una variable
    var noticia = new Noticia();

    // Agregamos titulo y cuerpo
    //noticia.titulo = document.getElementById('titulo').value;
    noticia.titulo = $("#titulo").val();
    //console.log(noticia.titulo);
    //noticia.cuerpo = document.getElementById('cuerpo').value;
    noticia.cuerpo = $("#cuerpo").val();
    //console.log(noticia.cuerpo);

    // Si el usuario cargo algo hago esto, caso contrario..
    if (noticia.titulo && noticia.cuerpo !== null) {
      noticias.push(noticia);
      limpiarCampo();      
      return true;
    } else {
      return false;
    }

  }

//var btnAdd = document.getElementById('miboton-agregar');
//btnAdd.onclick = agregarNoticia;


$("#miboton-agregar").click(agregarNoticia);


//var btnShow = document.getElementById('miboton-mostrar');
//btnShow.onclick = mostrarNoticia;

$("#miboton-mostrar").click(mostrarNoticia);


  function mostrarNoticia() {

    // Agarramos el container de noticias (fijate que metodo usamos)
    if (noticias.length > 0) {

      


      // capturo el elemento con ID "noticias" (fijate en el HTML)
      //var containerNoticias = document.getElementById("noticias");
      var containerNoticias = $("#noticias");



      // Creamos un par de variables para el titulo y parrafo
      var tituloConFormato;
      var parrafoConFormato;




      // Iteramos sobre el array de noticias
      for (var i = 0; i < noticias.length; i++) {

        // Creamos los elementos y los asignamos
        tituloConFormato = document.createElement("h2");
        parrafoConFormato = document.createElement("p"); 
        
  
        // Agrego el contenido del titulo y noticias
        tituloConFormato.append(noticias[i].titulo);
        //parrafoConFormato.innerHTML = noticias[i].cuerpo;
        parrafoConFormato.append(noticias[i].cuerpo);
        

        // Los agrego al DOM
        //containerNoticias.appendChild(tituloConFormato);
        //containerNoticias.appendChild(parrafoConFormato);

        $("#noticias").append(tituloConFormato);
        $("#noticias").append(parrafoConFormato);
        $("p").addClass("p1");
             
        }
  

    

      // Vaciamos el array al finalizar (proba que pasa si sacas esto)
      noticias = [];

      // Como la carga de noticias salio bien, devolvemos "true"
      return true;

    } else {
      // Si no hay nada en el array noticias devolvemos "false"
      return false;
    }

  }


  // entorno publico

  return {



    agregar: function() {
      // hacer algo
      if (agregarNoticia()) {
        return "Carga de noticias exitosa.";
      } else {
        return "No se ha cargado nada.";
      }

    },
    mostrar: function() {
      if (mostrarNoticia()) {
        return "Cargando noticias al DOM..";
      } else {
        return "No se ha agregado ninguna noticia, cargue una antes.";
      }

    }
  };



})();



    

// console.log("Carga de JS realizada con exito!");