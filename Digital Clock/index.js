function updateClock() {
  let now = new Date();

  // ⏰ Time
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;

  // 📅 Date & Day
  let day = now.getDate();
  let year = now.getFullYear();

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const days = [
    "Sunday","Monday","Tuesday","Wednesday",
    "Thursday","Friday","Saturday"
  ];

  let monthName = months[now.getMonth()];
  let dayName = days[now.getDay()];

  document.getElementById("date").innerText =
    `${day} ${monthName} ${year} ${dayName}`;
}

setInterval(updateClock, 1000);
updateClock();
