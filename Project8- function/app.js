function toCelsius(fahrenheit)
{
    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + "℃";
}
function display(elementId, value)
{
    document.getElementById(elementId).innerHTML = "<b>" +value+ "</b>"
}
function tofahrenheit(celsius)
{
    let value = (celsius * 9/ 5) +32
    return value.toFixed(2) + "°F";
}

var dataTemp = prompt("กรอกอุณหภูมิ")

alert(toCelsius(dataTemp))
display("toCelsius", toCelsius(dataTemp))
alert(tofahrenheit(dataTemp))
display("toFahrenheit", tofahrenheit(dataTemp))