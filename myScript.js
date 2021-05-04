//establish arrays for quantities of umbrellas, raincoats, and swimsuits
let umbrellaQuantity = [];
let raincoatQuantity = [];
let swimsuitQuantity = [];
//main function to receive user input of quantities of various items, supporting functions are
//used to track the quantity and price of each item, and then output results to the scren
function calculateTotals() {
    let items = ["Umbrella", "Rain Coat", "Swimsuit"];
    let price = [14.99, 119.99, 40.00];
    let userItem = document.clothesForm.item.value;
    let quantity = document.clothesForm.quantity.value;
    let totalMessage = "";

    //input validation for quantity. handles string input, quantity less than 1, and decimal numbers
    while (isNaN(quantity)) {
        quantity = prompt("INVALID ENTRY! Please enter a numeric value for quantity.");
        while (quantity <= 0) {
            quantity = prompt("INVALID ENTRY! Quantity must be a value that's greater than zero.");
        } while (quantity % 1 != 0) {
            quantity = prompt("INVALID ENTRY! Please enter a whole number for quantity");
        }
    }
    while (quantity <= 0) {
        quantity = prompt("INVALID ENTRY! Quantity must be a value that's greater than zero.");
        while (isNaN(quantity)) {
            quantity = prompt("INVALID ENTRY! Please enter a numeric value for quantity.");
        } while (quantity % 1 != 0) {
            quantity = prompt("INVALID ENTRY! Please enter a whole number for quantity");
        }
    }
    while (quantity % 1 != 0) {
        quantity = prompt("INVALID ENTRY! Please enter a whole number for quantity");
        while (isNaN(quantity)) {
            quantity = prompt("INVALID ENTRY! Please enter a numeric value for quantity.");
        }
        while (quantity <= 0) {
            quantity = prompt("INVALID ENTRY! Quantity must be a value that's greater than zero.");
        }
    }
    document.clothesForm.quantity.value = quantity;
    quantity = parseInt(quantity);
    
    //pushes item quantity number to respective array
    if (userItem == "Umbrella") {
        umbrellaQuantity.push(quantity);
    }
    if (userItem == "Rain Coat") {
        raincoatQuantity.push(quantity);
    }
    if (userItem == "Swimsuit") {
        swimsuitQuantity.push(quantity);
    }

    //sets item quantities and costs by calling on supporting functions
    let umbrellaQuantityValue = computeUmbrellaQuantity(umbrellaQuantity);
    let umbrellaCost = calculateUmbrellaCost(umbrellaQuantityValue);
    let raincoatQuantityValue = computeRaincoatQuantity(raincoatQuantity);
    let raincoatCost = calculateRaincoatCost(raincoatQuantityValue);
    let swimsuitQuantityValue = computeSwimsuitQuantity(swimsuitQuantity);
    let swimsuitCost = calculateSwimsuitCost(swimsuitQuantityValue);
    let cartQuantityValue = computeCartQuantity(umbrellaQuantityValue, raincoatQuantityValue, swimsuitQuantityValue);
    let cartCost = calculateCartCost(umbrellaCost, raincoatCost, swimsuitCost);
    
    //prints results to screen
    if (umbrellaQuantityValue > 0 || raincoatQuantityValue > 0 || swimsuitQuantityValue > 0) {
        let umbrellaMessage = "Umbrella: (Quantity " + umbrellaQuantityValue + ") Cost: $" + umbrellaCost.toFixed(2) + ".";
        if (umbrellaQuantityValue > 0) {
            document.getElementById("umbrella").innerHTML = umbrellaMessage;
        }
        let raincoatMessage = "Rain Coat: (Quantity " + raincoatQuantityValue + ") Cost: $" + raincoatCost.toFixed(2) + ".";
        if (raincoatQuantityValue > 0) {
            document.getElementById("raincoat").innerHTML = raincoatMessage;
        }
        let swimsuitMessage = "Swimsuit: (Quantity " + swimsuitQuantityValue + ") Cost: $" + swimsuitCost.toFixed(2) + ".";
        if (swimsuitQuantityValue > 0) {
            document.getElementById("swimsuit").innerHTML = swimsuitMessage;
        }
        totalMessage = "Total number of items in your cart: " + cartQuantityValue + ". Total cost of your cart: $" + cartCost.toFixed(2) + ".";
        document.getElementById("results").innerHTML = totalMessage;
    } else {
        document.getElementById("begin").innerHTML = totalMessage;
    }
}
//function calculates the cost of all items in the cart
function calculateCartCost(umbrella, raincoat, swimsuit) {
    let total = 0;
    total = umbrella + raincoat + swimsuit;
    return total;
}
//function calculates the quantity of all items in the cart
function computeCartQuantity(umbrella, raincoat, swimsuit) {
    let total = 0;
    total = umbrella + raincoat + swimsuit;
    return total;
}
//function calculates the cost of just the swimsuits
function calculateSwimsuitCost(swimsuitQuantityValue) {
    let total = 0;
    let price = 40;
    total = price * swimsuitQuantityValue;
    return total;
}
//function calculates the quantity of swimsuits
function computeSwimsuitQuantity(quantity) {
    let total = 0;
    for (let i = 0; i < quantity.length; i++) {
        total += quantity[i];
    }
    return total;
}
//function calculates the cost of just the raincoats
function calculateRaincoatCost(raincoatQuantityValue) {
    let total = 0;
    let price = 119.99;
    total = price * raincoatQuantityValue;
    return total;
}
//function calculates the quantity of just the raincoats
function computeRaincoatQuantity(quantity) {
    let total = 0;
    for (let i = 0; i < quantity.length; i++) {
        total += quantity[i];
    }
    return total;
}
//function calculates the cost of just the umbrellas
function calculateUmbrellaCost(umbrellaQuantityValue) {
    let total = 0.0;
    let price = 14.99;
    total = price * umbrellaQuantityValue;
    return total;
}
//function calculates the quantity of just the umbrellas
function computeUmbrellaQuantity(quantity) {
    let total = 0;
    for (let i = 0; i < quantity.length; i++) {
        total += quantity[i];
    }
    return total;
}