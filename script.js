let currentFlyer = 1;

const flyers = [
    "images/flyer1.png",
    "images/flyer2.jpg",
    "images/flyer3.png"
];

function changeFlyer(direction) {
    currentFlyer += direction;

    if (currentFlyer > 3) currentFlyer = 1;
    if (currentFlyer < 1) currentFlyer = 3;

    document.getElementById("flyer").innerHTML =
        `<img src="${flyers[currentFlyer - 1]}" alt="Flyer ${currentFlyer}">`;

    document.getElementById("flyer-count").textContent =
        "Flyer " + currentFlyer + " of 3";
}

// Display the first flyer when the website opens
document.getElementById("flyer").innerHTML =
    `<img src="${flyers[0]}" alt="Flyer 1">`;