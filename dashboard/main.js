// Let's declare first the the element of the dashboard
// Buttons
let startButton = document.querySelector("#start-button");
let stopButton = document.querySelector("#stop-button");
let increaseButton = document.querySelector("#increase-button");
let decreaseButton = document.querySelector("#decrease-button");
let refuelButton = document.querySelector("#refuel");
// Speedometer and RPM
let speedNeedle = document.querySelector("#speed-needle");
let rpmNeedle = document.querySelector("#rpm-needle");
let speedValue = document.querySelector("#speed-value");
let rpmValue = document.querySelector("#rpm-value");

// Panel and Indicators
let temperature = document.querySelector("#temperature-indicator");
let fuel = document.querySelector("#fuel-indicator");
let distance = document.querySelector("#distance-indicator");

// I have five onclick functions for the buttons
let newSpeed;

// Start Button
startEngine();
function startEngine() {
  document
    .querySelector("#start-button")
    .addEventListener("click", function () {
      speedNeedle.style.transition = "all 0.7s ease-in-out";
      rpmNeedle.style.transition = "all 0.7s ease-in-out";
      speedNeedle.style.transform = "rotate(0deg)";
      rpmNeedle.style.transform = "rotate(0deg)";
      setTimeout(function () {
        speedNeedle.style.transform = "rotate(-180deg)";
        rpmNeedle.style.transform = "rotate(-180deg)";
        startButton.style.display = "none";
        stopButton.style.display = "block";
      }, 700);
      speedValue.innerHTML = "0";
      rpmValue.innerHTML = "0";
      temperature.innerHTML = "0";
      distance.innerHTML = "0";

      // I want to replace the start button by the stop button
    });
}

// Stop Button
stopEngine();
function stopEngine() {
  document.querySelector("#stop-button").addEventListener("click", function () {
    speedNeedle.style.transition = "all 0.7s ease-in-out";
    rpmNeedle.style.transition = "all 0.7s ease-in-out";
    speedNeedle.style.transform = "rotate(-180deg)";
    rpmNeedle.style.transform = "rotate(-180deg)";
    setTimeout(function () {
      startButton.style.display = "block";
      stopButton.style.display = "none";
    }, 700);
    speedValue.innerHTML = "--";
    rpmValue.innerHTML = "--";
    temperature.innerHTML = "--";
    fuel.innerHTML = "--";
    distance.innerHTML = "--";
  });
}

// Increase Speed Button
increaseSpeed();
function increaseSpeed() {
  let increaseInterval;
  let currentSpeed;
  let newRotation = -180; // Déclaration et initialisation de newRotation à -180 degrés
  increaseButton.addEventListener("mousedown", function () {
    clearInterval(decelerateInterval);
    increaseInterval = setInterval(function () {
      currentSpeed = parseFloat(speedValue.innerHTML);
      if (
        newRotation <= 10 && // Modifier la condition pour s'arrêter à 10 degrés
        stopButton.style.display == "block" &&
        parseFloat(fuel.innerHTML) > 0
      ) {
        newSpeed = currentSpeed + 1; // Augmentation de la vitesse de 1 km/h
        speedValue.innerHTML = newSpeed.toString();
        newRotation = -180 + (newSpeed * 190) / 220; // Ajuster la formule pour obtenir la nouvelle plage de rotation
        rpmRotation = -180 + (newSpeed * 190) / 400;
        for (let i = 0; i < 1000; i++) {
          if (newSpeed > i) {
            fuel.innerHTML = 100 - i / 10;
            temperature.innerHTML = i * 1.5;
            distance.innerHTML = i / 5;
          }
        }
        speedNeedle.style.transform = `rotate(${newRotation}deg)`;
        rpmNeedle.style.transform = `rotate(${rpmRotation}deg)`;
      } else if (parseFloat(fuel.innerHTML) <= 0) {
        alert("Please refuel");
      } else {
        clearInterval(increaseInterval);
      }
    }, 100);
  });
  increaseButton.addEventListener("mouseup", function () {
    clearInterval(increaseInterval);
    decelerateInterval = setInterval(function () {
      currentSpeed = parseFloat(speedValue.innerHTML);
      if (currentSpeed > 0) {
        newSpeed = currentSpeed - 1; // Décélération de la vitesse de 1 km/h
        speedValue.innerHTML = newSpeed.toString();
        newRotation = -180 + (newSpeed * 190) / 220; // Ajuster la formule pour obtenir la nouvelle plage de rotation
        rpmRotation = -180 + (newSpeed * 190) / 600;
        for (let i = 0; i < 100; i++) {
          if (newSpeed > i) {
            temperature.innerHTML = i / 1.5;
          }
        }
        speedNeedle.style.transform = `rotate(${newRotation}deg)`;
        rpmNeedle.style.transform = `rotate(${rpmRotation}deg)`;
      } else {
        clearInterval(decelerateInterval);
        // Arrêter la décélération lorsque la vitesse atteint 0
      }
    }, 500);

    // Arrêter l'augmentation de la vitesse lorsque le bouton est relâché
  });
}
// Decrease Speed Button
decreaseSpeed();
function decreaseSpeed() {
  let decreaseInterval; // Ajout d'une variable pour l'intervalle de décélération
  decreaseButton.addEventListener("mousedown", function () {
    decreaseInterval = setInterval(function () {
      currentSpeed = parseFloat(speedValue.innerHTML);
      if (currentSpeed > 0) {
        newSpeed = currentSpeed - 2; // Décélération de la vitesse de 5 km/h (valeur modifiée)
        speedValue.innerHTML = newSpeed.toString();
        newRotation = -180 + (newSpeed * 190) / 220; // Ajuster la formule pour obtenir la nouvelle plage de rotation
        rpmRotation = -180 + (newSpeed * 190) / 600;
        for (let i = 0; i < 100; i++) {
          if (newSpeed > i) {
            temperature.innerHTML = i / 1.5;
          }
        }
        speedNeedle.style.transform = `rotate(${newRotation}deg)`;
        rpmNeedle.style.transform = `rotate(${rpmRotation}deg)`;
      } else {
        clearInterval(decreaseInterval);
        // Arrêter la décélération lorsque la vitesse atteint 0
      }
    }, 500);
  });
}

// Refuel Button
refuel();
function refuel() {
  refuelButton.addEventListener("click", function () {
    if (
      parseFloat(speedValue.innerHTML) != 0 &&
      parseFloat(rpmValue.innerHTML) != 0
    ) {
      alert("Please stop the engine first");
    } else {
      fuel.innerHTML = "100";
    }
  });
}
