document.getElementById("textToCopy")?.addEventListener("click", function() {
    const text = "newnova.blockworlds.io"
    const btn = document.getElementById("textToCopy")
    

    navigator.clipboard.writeText(text).then(() => {
        btn.classList.add("copied", "important")
        btn.innerHTML = "Copied to clipBoard!"

      setTimeout(() => {
         btn.classList.remove("copied")
        
        
        btn.innerHTML = "IP: newnova.blockworlds.io"
      }, 2000);
    }).catch(err => {
      console.error("Errore nella copia:", err);
    });
  });


  async function getOnline() {
    let response = await fetch("http://newnova.blockworlds.io:8084/v2/newnova/");
    let response2 = await fetch("http://newnova.blockworlds.io:8085/v2/newnova/")
    if (response.ok || response2.ok) {
      let pl = await response.json();
      let pl2 = await response2.json();
      let totPla = pl.players.numOnlinePlayers + pl2.players.numOnlinePlayers
      let pla
      if(totPla == 1)
        pla = "player"
      else pla = "players"
      return "Currently " + totPla +" "+ pla+" online";
    } else {
      return "there has been an error";
    }
  }


 getOnline().then(ret => document.getElementById("players").innerHTML = ret)