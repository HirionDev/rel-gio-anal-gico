const hora = document.querySelector(".hora");
const minuto = document.querySelector(".minuto");
const segundo = document.querySelector(".segundo");

function getTime() {
  const time = new Date();

  const getHourRot = (360 / 12) * time.getHours();
  const getMinRot = (360 / 60) * time.getMinutes();
  const getSecRot = (360 / 60) * time.getSeconds();

  hora.style.transform = `rotate(${getHourRot}deg)`;
  minuto.style.transform = `rotate(${getMinRot}deg)`;
  segundo.style.transform = `rotate(${getSecRot}deg)`;
}

setInterval(() => {
  getTime();
}, 1000);

getTime();
