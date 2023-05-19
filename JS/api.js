async function fetchApi(apiUrl) {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}
​function getAverage(temperaturesArray) {
    let sum = temperaturesArray.reduce((previous, current) => current += previous);
    let avg = sum / temperaturesArray.length;
    return avg.toFixed(1);
}
​(async function () {
    // Las coordenadas indicadas (-34.61, -58.38) corresponden a la Ciudad de Buenos Aires
    // Traerá un array, con las temperaturas POR HORA pronosticadas para el día siguiente
    // se calculará el promedio.
    const newUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-34.61&longitude=-58.38&hourly=temperature_2m&forecast_days=1&timezone=America%2FSao_Paulo&timeformat=unixtime'
    const result = await fetchApi(newUrl);
    const promedio = getAverage(result["hourly"]["temperature_2m"]);
    document.getElementById('contenidoTemperatura').innerText = 'La temperatura promedio esperada para mañana es de ' + promedio + "°C";
​})();