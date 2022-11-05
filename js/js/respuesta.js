function logEnvioFormulario(event){
    console.log(event);
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const genero=document.getElementById("genero").value;
    log.textContent=`Formulario enviado \n nombre=${nombre}| apellido=${apellido} | genero=${genero}`;
    event.preventDefault();
  }
  
  const log=document.getElementById("log");
  const formulario=document.getElementById("form");
  
  formulario.addEventListener("submit", logEnvioFormulario);
  