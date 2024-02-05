// Función para encriptar el texto
function encriptarTexto() {
    let texto = document.getElementById("aencriptar").value;
    let textoEncriptado = "";
    // Reemplazar letras según las reglas
    if (texto.match(/[^a-z]/)) {
        return alert("Solo se permiten letras minusculas y sin acentos");
    } else {
        for (let i = 0; i < texto.length; i++ ) {
            switch (texto[i]) {
              case "e":
                textoEncriptado += "enter";
                break;
              case "i":
                textoEncriptado += "imes";
                break;
              case "a":
                textoEncriptado += "ai";
                break;
              case "o":
                textoEncriptado += "ober";
                break;
              case "u":
                textoEncriptado += "ufat";
                break;
              default:
                textoEncriptado += texto[i];
            }
          }
        
          // Mostrar el texto encriptado
          document.getElementById("texto-encriptado").innerHTML = textoEncriptado;
    }

  }
  
  // Función para desencriptar el texto
  function desencriptarTexto() {
    let textoEncriptado = document.getElementById("aencriptar").value;
    let textoDesencriptado = "";
  
    // Reemplazar las palabras clave por las letras originales
    if (textoEncriptado.match(/[^a-z]/)) {
      return alert("Solo se permiten letras minusculas y sin acentos");
    } else {
      for (let i = 0; i < textoEncriptado.length; i++) {
        // Reemplazo de "texto" por "textoEncriptado"
        if (textoEncriptado.substr(i, 5) === "enter") {
          textoDesencriptado += "e";
          i += 4;
        } else if (textoEncriptado.substr(i, 5) === "imes") {
          textoDesencriptado += "i";
          i += 4;
        } else if (textoEncriptado.substr(i, 2) === "ai") {
          textoDesencriptado += "a";
          i += 1;
        } else if (textoEncriptado.substr(i, 4) === "ober") {
          textoDesencriptado += "o";
          i += 3;
        } else if (textoEncriptado.substr(i, 4) === "ufat") {
          textoDesencriptado += "u";
          i += 3;
        } else {
          textoDesencriptado += textoEncriptado[i];
        }
      }
    }
  
    document.getElementById("texto-encriptado").innerHTML = textoDesencriptado;
  }
  
  
  // Función para copiar el texto al portapapeles
  function copiarTexto() {
    let texto = document.getElementById("texto-encriptado").textContent;
    navigator.clipboard.writeText(texto);
    alert("¡Texto copiado al portapapeles!");
  }
  
  // Función para limpiar el texto del input
  function limpiarCaja() {
    document.getElementById("aencriptar").value = "";
    document.getElementById("texto-encriptado").innerHTML= "";
  }

  
  