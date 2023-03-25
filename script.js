let currentPlayer = "";
let players = ["", "", "", "", "", "", ""];
let results = [
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
];

function fill(position) {
  if (currentPlayer !== "") {
    document.getElementById(position).innerHTML = currentPlayer;
    players[position] = currentPlayer;
    switch (position) {
      case '1':
        document.getElementById('player1').innerHTML = currentPlayer;
      case '2':
        document.getElementById('player2').innerHTML = currentPlayer;
      case '3':
        document.getElementById('player3').innerHTML = currentPlayer;
      case '4':
        document.getElementById('player4').innerHTML = currentPlayer;
      case '5':
        document.getElementById('player5').innerHTML = currentPlayer;
      case '6':
        document.getElementById('player6').innerHTML = currentPlayer;
      case '7':
        document.getElementById('player7').innerHTML = currentPlayer;
    }
    currentPlayer = "";
  }
}

function select(player) {
  currentPlayer = player;
}

function switchScreen() {
  var tableAnalyse = document.getElementById('analyse');
  if (tableAnalyse.style.visibility === 'collapse') {
    tableAnalyse.style.visibility = 'visible';
    document.getElementById('setup').style.visibility = 'collapse';
    var buttonSwitch = document.getElementById('switch');
    buttonSwitch.innerHTML = '< Terug';
    buttonSwitch.style.textAlign = 'left';
    document.getElementById('title').innerHTML = 'Analyse';
    document.getElementById('save').style.visibility = 'visible';
  } else {
    tableAnalyse.style.visibility = 'collapse';
    document.getElementById('setup').style.visibility = 'visible';
    var buttonSwitch = document.getElementById('switch');
    buttonSwitch.innerHTML = 'Verder >';
    buttonSwitch.style.textAlign = 'right';
    document.getElementById('title').innerHTML = 'Opstelling';
    document.getElementById('save').style.visibility = 'hidden';
  }
}

function ButtonClicked(player, contact, value) {
  if (value === -1) results[player][contact][0] += 1;
  else if (value === 0) results[player][contact][1] += 1;
  else if (value === 1) results[player][contact][2] += 1;
}

function save() {
  var answer = "Resultaten: %0A%0A";
  for (let i = 0; i < 7; i++)
    answer += players[i] + "%0A" + helper(i) + "%0A%0A";
  window.open(`mailto:xeo.gillis@gmail.com?subject=Venus&body=${answer}`);
}

function helper(index) {
  var answer = "Opslag: " + helperhelper(index, 0);
  answer += "Verdediging: " + helperhelper(index, 1);
  answer += "Pas: " + helperhelper(index, 2);
  answer += "Aanval: " + helperhelper(index, 3);
  return answer;
}

function helperhelper(index1, index2) {
  return "[" + results[index1][index2][0] + ", " + results[index1][index2][1] + ", " + results[index1][index2][2] + "]%0A";
}