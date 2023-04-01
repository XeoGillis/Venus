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
  var playerResult = "Resultaten: \n\n";
  var groupResult = "Groep: \n\n";
  for (let i = 0; i < 7; i++) {
    playerResult += players[i] + "\n" + helperPlayer(i) + "\n" + helper(i) + "\n\n";
    groupResult += helperGroup[i];
  }
  playerResult += "\n\n\n";
  playerResult += groupResult;
  var blob = new Blob([playerResult], {
    type: "text/plain;charset=utf-8"
  });
  saveAs(blob, "test.txt");
}

function helperPlayer(index) {
  var answer = "Opslag: " + helperhelperPlayer(index, 0);
  answer += "Verdediging: " + helperhelperPlayer(index, 1);
  answer += "Pas: " + helperhelperPlayer(index, 2);
  answer += "Aanval: " + helperhelperPlayer(index, 3);
  return answer;
}

function helperhelperPlayer(index1, index2) {
  return "[" + results[index1][index2][0] + ", " + results[index1][index2][1] + ", " + results[index1][index2][2] + "]\n";
}

function helperGroup(index) {
  var answer = helperhelperGroup(index, 0, 'opslag');
  answer += helperhelperGroup(index, 1, 'verdediging');
  answer += helperhelperGroup(index, 2, 'pas');
  answer += helperhelperGroup(index, 3, 'aanval');
  return answer;
}

function helper(index) {
  var answer = helperhelper(index, 0, 'opslag');
  answer += helperhelper(index, 1, 'verdediging');
  answer += helperhelper(index, 2, 'pas');
  answer += helperhelper(index, 3, 'aanval');
  return answer;
}

function helperhelperGroup(index1, index2, contact) {
  var result = "";
  var i = 0;

  while (i < results[index1][index2][0]) {
    result += '["' + players[index1] + '","' + contact + '", 0],';
    i++;
  }

  i = 0;
  while (i < results[index1][index2][1]) {
    result += '["' + players[index1] + '","' + contact + '", 1],';
    i++;
  }

  i = 0;
  while (i < results[index1][index2][2]) {
    result += '["' + players[index1] + '","' + contact + '", 2],';
    i++;
  }

  return result;
}

function helperhelper(index1, index2, contact) {
  var result = "";
  var i = 0;

  while (i < results[index1][index2][0]) {
    result += '["' + contact + '", 0],';
    i++;
  }

  i = 0;
  while (i < results[index1][index2][1]) {
    result += '["' + contact + '", 1],';
    i++;
  }

  i = 0;
  while (i < results[index1][index2][2]) {
    result += '["' + contact + '", 2],';
    i++;
  }

  return result;
}

function newset() {
  var players = [1, 2, 3, 4, 5, 6, 7];
  var contacts = [0, 1, 2, 3];
  var values = [-1, 0, 1];

  for (player in players)
    for (contact in contacts)
      for (value in values) {
        if (players[player] !== 7)
          document.getElementById((players[player] - 1).toString() + contacts[contact].toString() + values[value].toString()).innerHTML = '0';
        else if (contacts[contact] !== 0)
          document.getElementById((players[player] - 1).toString() + contacts[contact].toString() + values[value].toString()).innerHTML = '0';
      }

  for (player in players) {
    if (players[player] === 7) {
      document.getElementById(players[player]).innerHTML = "libero";
      document.getElementById("player" + players[player]).innerHTML = "libero";
    } else {
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