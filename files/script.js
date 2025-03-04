document.getElementById("textToCopy").addEventListener("click", function() {
    const text = "newnova.blockworlds.io"
    const btn = document.getElementById("textToCopy")
    

    navigator.clipboard.writeText(text).then(() => {
        btn.classList.add("copied")
        btn.innerHTML = "Copied to clipBoard!"

      setTimeout(() => {
         btn.classList.remove("copied")
        
        
        btn.innerHTML = "IP: newnova.blockworlds.io"
      }, 2000);
    }).catch(err => {
      console.error("Errore nella copia:", err);
    });
  });
