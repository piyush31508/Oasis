function convertTemperature() {
    // Get the selected units and temperature input
    var unitTo = document.getElementById("unitf").value;
    var unitFrom = document.getElementById("unitt").value;
    var temperature = parseFloat(document.getElementById("temperature").value);

    // Check if the temperature input is a valid number
    if (isNaN(temperature)) {
        alert("Please enter a valid temperature");
        return;
    }

    // Perform the temperature conversion
    var result;
    if (unitFrom === "celsius" && unitTo === "fahrenheit") {
        result = (temperature * 9/5) + 32;
    } else if (unitFrom === "celsius" && unitTo === "kelvin") {
        result = temperature + 273.15;
    } else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
        result = (temperature - 32) * 5/9;
    } else if (unitFrom === "fahrenheit" && unitTo === "kelvin") {
        result = (temperature - 32) * 5/9 + 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "celsius") {
        result = temperature - 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "fahrenheit") {
        result = (temperature - 273.15) * 9/5 + 32;
    } else {
        // If the units are the same, no conversion needed
        result = temperature;
    }

    // Display the result
    document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)} ${unitTo}`;
}
