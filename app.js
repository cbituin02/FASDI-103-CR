let hunger = 80;
let happiness = 50;
let energy = 30;

function displayinfo() {
    document.getElementById("hungerInfo").innerHTML = `Hunger: ${hunger}`;
    document.getElementById("happinessInfo").innerHTML = `Happiness: ${happiness}`;
    document.getElementById("energyInfo").innerHTML = `Energy: ${energy}`;
}

function feed() {
    //affect var (increase the happiness and decarease the hunger +-10)
    console.log("Feed function");
    hunger = hunger - 10;
    happiness = happiness + 10;
    if (hunger < 0) {
        input.value=0;
    }
    if (happiness > 100) {
        input.value=100;
    }
    displayinfo();
}

function pet() {
    console.log("Pet function");
    happiness = happiness + 10;
    energy = energy + 10;
    if (happiness > 100) {
        input.value=100;
    }
    displayinfo();
}

function play() {
    console.log("Play function");
    energy = energy - 10;
    hunger = hunger + 10;
    if (energy < 0) {
        input.value=0;
    }
    if (hunger > 100) {
        input.value=100;
    }
    displayinfo();
}

displayinfo();

//ASSIGNMENT - USE CSS TO DESIGN
//EXTRA - Values should be 0 - 100 , (x)<0 or (x)>100 )