//Complete the Weather API Backend part using openweathermap api

document.querySelector(".search-box").addEventListener("input", async (e) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const city = e.target.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5a48b552693f7f3d6028d7432aa09c9b`;
  axios
    .get(url)
    .then((details) => {
      console.log(details);
      document.querySelector(".city").innerHTML =
        details.data.name + " , " + details.data.sys.country;
      document.querySelector(".date").innerHTML =
        days[date.getDay()] +
        " " +
        date.getDate() +
        " " +
        months[date.getMonth()] +
        " " +
        date.getFullYear();
      document.querySelector(".temp").innerHTML = details.data.main.temp + "°C";
      document.querySelector(".weather").innerHTML =
        details.data.weather[0].main;
      document.querySelector(".hi-low").innerHTML =
        details.data.main.temp_min +
        "°C / " +
        details.data.main.temp_max +
        "°C";
    })
    .catch((err) => {
      console.log("Error Here");
      console.log(err);
    });
});
