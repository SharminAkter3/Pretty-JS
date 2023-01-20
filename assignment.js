// Example:1 ==> convert radian to degree

function radianToDegree(radian) {
    if (typeof radian !== "number") {
        return "Please enter a number"
    }
    const pi = Math.PI;
    const degree = (180 / pi) * radian;
    return degree.toFixed(2);
}
// const result = radianToDegree(199);
// console.log(result);


//Example : 2 ==> check whether the given file name is a javaScript file or not 

function isJavaScriptFile(fileName) {
    if (typeof fileName !== "string") {
        return "Please provide a valid input"
    }
    let extention = fileName.substr(fileName.lastIndexOf('.') + 1);

    if (extention == 'js') {
        return true;
    }
    else {
        return false;
    }
}
// const file1 = isJavaScriptFile("app.js");
// console.log(file1);


//Example ==> 3. Calculate the total oil price that I have to pay

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    if (typeof dieselQuantity !== "number" || typeof petrolQuantity !== "number" || typeof octaneQuantity !== "number") {
        return "Please provide a valid input"
    }

    let dieselPrice = 114;
    let petrolPrice = 130;
    let octanePrice = 135;

    // total diesel price 
    let totalDieselPrice = dieselPrice * dieselQuantity;
    let diesel = totalDieselPrice;
    // console.log(diesel);

    //total petrol price 
    let totalPetrolPrice = petrolPrice * petrolQuantity;
    let petrol = totalPetrolPrice;
    // console.log(petrol);

    //total octane price 
    let totalOctanePrice = octanePrice * octaneQuantity;
    let octane = totalOctanePrice;
    // console.log(octane);

    //total oil price 
    let totalOilPrice = diesel + petrol + octane;
    // console.log(totalOilPrice);
    return totalOilPrice;
}
// console.log(oilPrice(1, 0, 2));


//Example: 4 ==> Calculate public bus fare

function publicBusFare(numberOfPublic) {
    if (typeof numberOfPublic !== "number") {
        return "Please provide a number"
    }

    const reservedBus = numberOfPublic % 50;
    const microBus = reservedBus % 11;
    const publicBusCost = microBus * 250;
    return publicBusCost;

}
// console.log(publicBusFare(263));


//Example : 5 ==> are they best friend of each other 

function isBestFriend(friend1, friend2) {
    if (typeof friend1 !== "object" || typeof friend2 !== "object") {
        return "Please provide a valid input"
    }
    if (friend1.name && friend1.friend && friend2.name && friend2.friend) {
        if (friend1.name.toUpperCase() === friend2.friend.toUpperCase() && friend2.name.toUpperCase() === friend1.friend.toUpperCase()) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "they are not best friend";
    }
}
// const bestFriend1 = { name: "abul", friend: "babul" }
// const bestFriend2 = { name: "babul", friend: "abul" }
// console.log(isBestFriend(bestFriend1, bestFriend2));
