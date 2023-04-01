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
    players[position - 1] = currentPlayer;
    document.getElementById('player' + position).innerHTML = currentPlayer;
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
  var id = player.toString() + contact.toString() + value.toString();
  document.getElementById(id).innerHTML = parseInt(document.getElementById(id).innerHTML) + 1;
}

function save() {
  var answer = "Resultaten: \n\n";
  for (let i = 0; i < 7; i++)
    answer += players[i] + "\n" + helper(i) + "\n\n";
  var blob = new Blob([answer], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "test.txt");
}

function helper(index) {
  var answer = "Opslag: " + helperhelper(index, 0);
  answer += "Verdediging: " + helperhelper(index, 1);
  answer += "Pas: " + helperhelper(index, 2);
  answer += "Aanval: " + helperhelper(index, 3);
  return answer;
}

function helperhelper(index1, index2) {
  return "[" + results[index1][index2][0] + ", " + results[index1][index2][1] + ", " + results[index1][index2][2] + "]\n";
}

function newset() {
  var players = [1, 2, 3, 4, 5, 6, 7];
  var contacts = [0, 1, 2, 3];
  var values = [-1, 0, 1];

  for (player in players)
    for (contact in contacts)
      for (value in values) {
        if (players[player] !== 7 )
          document.getElementById((players[player] - 1).toString() + contacts[contact].toString() + values[value].toString()).innerHTML = '0';
        else if (contacts[contact] !== 0)
          document.getElementById((players[player] - 1).toString() + contacts[contact].toString() + values[value].toString()).innerHTML = '0';
      }

  for (player in players) {
    if (players[player] === 7) {
      document.getElementById(players[player]).innerHTML = "libero";
      document.getElementById("player" + players[player]).innerHTML = "libero";
    }
    else {
      document.getElementById(players[player]).innerHTML = players[player];
      document.getElementById("player" + players[player]).innerHTML = "positie " + players[player];
    }
  }

  players = ["", "", "", "", "", "", ""];

  results = [
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
}