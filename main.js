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
    });
  }
});