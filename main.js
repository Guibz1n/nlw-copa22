function creategame(pais1, hour, pais2) { 
  return `
    <li>
      <img src="./assets/logo${pais1}.svg" alt="Logo ${pais1}" />
      <strong>${hour}</strong>
      <img src="./assets/logo${pais2}.svg" alt="Logo ${pais2}" />
    </li>
  `
}

let delay = 0;
function createcard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
       <h2>${date}<span>${day}</span></h2>
       <ul>
       ${games} 
      </ul>
    </div>
  `
}
document.querySelector("#cards").innerHTML = 
 
    createcard("24/11", "quinta", creategame("Brasil", "16:00", "Servia") +
    creategame("Suica", "18:00", "Camarao")) +
    createcard("24/11", "quinta", creategame("Suica", "18:00", "Brasil")) +
    createcard("25/11", "quinta", creategame("Brasil", "20:00", "Camarao"))
 
