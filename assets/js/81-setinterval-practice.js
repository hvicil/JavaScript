const elHour = document.querySelector("#clock li:nth-child(1)");
const elMinute = document.querySelector("#clock li:nth-child(3)");
const elSecond = document.querySelector("#clock li:nth-child(2)");

const tick = () => {
  const dateTime = new Date();

  let hour = dateTime.getHours();
  let minute = dateTime.getMinutes();

  hour = String(hour).length == 1 ? "0" + hour : hour;
  minute = String(minute).length == 1 ? "0" + minute : minute;

  elHour.innerText = hour;
  elMinute.innerText = minute;

  elSecond.classList.toggle("hidden");
};

setInterval(tick, 1000);
