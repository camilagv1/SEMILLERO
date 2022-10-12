// Se definen dos var donde se guardaran los elementos llamados por id
let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  // se obtiene el nombre del pais que digita el usuario
  let countryName = countryInp.value;
  // utilizamos la api y le enviamos el nombre del pais para completar la url
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalUrl);

  // generamos una respuesta donde se almacenan todo los datos y utilizamos la URL
  fetch(finalUrl) //peticion con var q tiene la api
    .then((response) => response.json()) //como la respuesta viene como obj lo pasamos a json
    .then((data) => {
      // Prueba para saber donde estan ubicados los datos y mostramos en consola
      console.log(data[0]);
      console.log(data[0].capital[0]); //capital del pais
      console.log(data[0].flags.svg); //bandra del pais
      console.log(data[0].name.common); //nombre del pais
      console.log(data[0].continents[0]); //continente del pais
      console.log(Object.keys(data[0].currencies)[0]); //abreviatura de la moneda
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name); //nombre de la moneda
      console.log(
        Object.values(data[0].languages).toString().split(",").join(",")
      ); //idionas del pais
    });
});
