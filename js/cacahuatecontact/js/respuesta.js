function logEnvioFormulario(event){
    console.log(event);
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const correo=document.getElementById("correo").value;
    const personaje=document.getElementsByName("personaje");
    for (let i of personaje){
      if (i.checked){
      resultado =  i.value;
      }
    }
    const p1=document.createElement("p");
    const T1=document.createTextNode("Formulario enviado");
    p1.appendChild(T1);
    const p2=document.createElement("p");
    const T2=document.createTextNode(`nombre=${nombre} `)
    p2.appendChild(T2);
    const p3=document.createElement("p");
    const T3=document.createTextNode(`apellido=${apellido} ` );
    p3.appendChild(T3);
    const p4=document.createElement("p");
    const T4=document.createTextNode(`correo=${correo}`);
    p4.appendChild(T4);
    const p5=document.createElement("p");
    const T5=document.createTextNode(`caracter=${resultado}`);
    p5.appendChild(T5);
    
    log.appendChild(p1);
    log.appendChild(p2);
    log.appendChild(p3);
    log.appendChild(p4);
    log.appendChild(p5);
    // log.textContent=texto;
    event.preventDefault();
  }
  
  const log=document.getElementById("log");
  const formulario=document.getElementById("contacto");
  
  formulario.addEventListener("submit", logEnvioFormulario);
  