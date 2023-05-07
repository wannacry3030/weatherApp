//Openweather API, nao compartilhe com ngm
const api = "eae2a5e6dc35e18b5696bd1bcbd7e5af";

//criando a arrow funtion que vai salvar a latitude e longitude
window.addEventListener("load", () => {
  let long;
  let lat;
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
      console.log(base);
      //usando Fetch para pegar a DATA
      fetch(base)
        .then((response) => {
          //convertendo a resposta para um objeto JSON
          return response.json();
        })
        .then((data) => {
          const { temp } = data.main;
          const place = data.name;
          const { description, icon } = data.weather[0];
          const { sunrise, sunset } = data.sys;
          console.log(data);
        });
    });
  }
});
//formula pra converter celsius pra fahrenheit = (celcius * 9) / 5 + 32
