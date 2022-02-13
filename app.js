let gameCounters = [
  {
    name: "crystals",
    value: 0,
  },
  {
    name: "mastery",
    value: 0,
  },
  {
    name: "damage",
    value: 0,
  },
  {
    name: "health",
    value: 0,
  },
];

function incrementUpOne(buttonChoice) {
  console.log(buttonChoice);
  let changeObject = gameCounters.find((c) => c.name == buttonChoice);

  changeObject.value += 1;
  drawTotals();
}

function incrementDownOne(buttonChoice) {
  console.log(buttonChoice);
  let changeObject = gameCounters.find((c) => c.name == buttonChoice);

  changeObject.value -= 1;
  drawTotals();
}

// Much later:  I think that using the title of iten as both what's shown as the button and what gets passed to play() is at least mildly clever
function drawIncrementUpButtons() {
  let template = "";
  gameCounters.forEach((item) => {
    template += `<button type="button" class="btn btn-secondary" data-toggle="button" onclick="incrementUpOne('${item.name}')">${item.name} +</button>`;
  });
  document.querySelector("#button-col").innerHTML = template;
}

function drawIncrementDownButtons() {
  let template = "";
  gameCounters.forEach((item) => {
    template += `<button type="button" class="btn btn-secondary" data-toggle="button" onclick="incrementDownOne('${item.name}')">${item.name} -</button>`;
  });
  document.querySelector("#button-down-col").innerHTML = template;
}

function drawTotals() {
  let template = '<div id="rules-text">';
  gameCounters.forEach((item) => {
    template += `<div class="ml-5 mr-5">${item.value}</div>` + "       ";
  });
  template += "</div>";
  document.querySelector("#current-total-display").innerHTML = template;
}

drawIncrementUpButtons();
drawIncrementDownButtons();

drawTotals();
