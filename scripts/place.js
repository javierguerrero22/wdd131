
const today = new Date();
const currentYear = today.getFullYear();


document.getElementById("year").textContent = currentYear

const lastModified = document.lastModified;


document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`

const main = function () {
    return calculateWindchill(temperature(), windSpeed())
}
const calculateWindchill = function (temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * windSpeed**0.16 + 0.3965 * temperature * windSpeed**0.16
}
const temperature = function () {
    const span = document.getElementById('temperature')
    const text = span.textContent
    return parseFloat(text)
}
const windSpeed = function () {
    const span = document.getElementById('wind')
    const text = span.textContent
    return parseFloat(text)
}

document.getElementById('windchill').textContent = `${main().toFixed(1)}°C`