var teams = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"]
var experts = ['1', '2', '3', '4', '5', '6'];
var preferences = [{
    team: "A",
    pref: ["2", "F", "3", "N", "B"]
  },
  {
    team: "B",
    pref: ["H", "1", "K", "D", "N"]
  },
  {
    team: "C",
    pref: ["D", "E", "G", "P", "M"]
  },
  {
    team: "D",
    pref: ["5", "E", "M", "K", "J"]
  },
  {
    team: "E",
    pref: ["F", "N", "K", "5", "L"]
  },
  {
    team: "F",
    pref: ["O", "A", "B", "D", "2"]
  },
  {
    team: "G",
    pref: ["2", "D", "H", "F", "E"]
  },
  {
    team: "H",
    pref: ["1", "O", "M", "D", "P"]
  },
  {
    team: "I",
    pref: ["D", "P", "G", "O", "C"]
  },
  {
    team: "J",
    pref: ["E", "L", "3", "C", "G"]
  },
  {
    team: "L",
    pref: ["D", "K", "C", "P", "I"]
  },
  {
    team: "K",
    pref: ["D", "M", "O", "4", "H"]
  },
  {
    team: "M",
    pref: ["P", "4", "G", "N", "C"]
  },
  {
    team: "N",
    pref: ["L", "D", "J", "I", "A"]
  },
  {
    team: "O",
    pref: ["D", "F", "L", "H", "2"]
  },
  {
    team: "P",
    pref: ["N", "5", "I", "B", "O"]
  }
];
const initPrefs = JSON.parse(JSON.stringify(preferences));
// console.log(preferences);
// var prefCount = 15;
function removeMatchedPrefs(p){
  for (var i = 0; i < p.length; i++) {
    console.log(p[i].team);
    console.log(p[i].partner[0]);
    var restPref = p[i].pref.filter(x => !p[i].partner[0].includes(x));
    console.log(restPref);
    p[i].pref = restPref;
  }
  return p

}
function prefersPrevPartnerOverP(preferences, choosingTeam, prevPartner, curPartner, prefCount) {
  for (var i = 0; i < prefCount; i++) {
    if (preferences.find(team => {
        return team.team === choosingTeam
      }).pref[i] == prevPartner) {
      return true
    }
    if (preferences.find(team => {
        return team.team === choosingTeam
      }).pref[i] == curPartner) {
      return false
    }
  }
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function randomizeRemainingPrefs(p) {
  for (var i = 0; i < p.length; i++) {

    var remainingPrefs = teams.filter(x => !p[i].pref.includes(x));
    remainingPrefs = remainingPrefs.filter(x => !p[i].team.includes(x));

    console.log("Initial team:")
    console.log(p[i]);
    console.log("Initial remaining preferences")
    console.log(remainingPrefs);
    shuffle(remainingPrefs);
    p[i].pref = p[i].pref.concat(remainingPrefs);
    console.log("Final team:")
    console.log(p[i]);
    console.log("Final remaining preferences")
    console.log(remainingPrefs);
  }
  return p
}

function algorithm(p, prefCount, matchOrder) {
  for (var i = 0; i < p.length; i++) {
    p[i]["matched"] = false;
    if(matchOrder==0){
    p[i]["partner"] = ["",""];
    p[i]["type"] = "participant";
    }
  }
  if(matchOrder==0){
    for(e=0;e<experts.length;e++){
      p.push({
        team: String(e+1),
        pref: [],
        matched: false,
        partner: ["",""],
        type: "expert"
      });
    }
  }

  var freeCount = p.length;
  while (p.find(team => {
    return team.matched === false && team.type === "participant"
  })) {
    var initTeam = p.find(team => {
      return team.matched === false && team.type === "participant"
    });
    var initTeamName = initTeam.team;
    console.log("initial team: "+initTeamName);
    var x = 0;
    while (x < prefCount+1 && p.find(team => {
        return team.team === initTeamName
      }).matched == false) {
        // if(p.find(team => {
        //     return team.team === initTeamName
        //   }).type == "expert"){
        //
        //   }
      var partner = p.find(team => {
        return team.team === initTeam.pref[x]
      });
      console.log("partner: "+partner.team);
      if (partner.matched == false) {
        p.find(team => {
          return team.team === initTeam.pref[x]
        }).matched = true;
        p.find(team => {
          return team.team === initTeamName
        }).matched = true;
        p.find(team => {
          return team.team === initTeam.pref[x]
        }).partner[matchOrder] = initTeamName;
        p.find(team => {
          return team.team === initTeamName
        }).partner[matchOrder] = partner.team;
        freeCount -= 2
        console.log("not matched partner");

      } else {
        console.log("matched partner");

        var prevPartner = p.find(team => {
          return team.team === partner.team
        }).partner[matchOrder];
        if (prefersPrevPartnerOverP(preferences, partner.team, prevPartner, initTeamName, prefCount) == false) {
          console.log("old partner: "+prevPartner+", new partner: "+partner.team);

          p.find(team => {
            return team.team === partner.team
          }).matched = true;
          p.find(team => {
            return team.team === initTeamName
          }).matched = true;
          p.find(team => {
            return team.team === partner.team
          }).partner[matchOrder] = initTeamName;
          p.find(team => {
            return team.team === initTeamName
          }).partner[matchOrder] = partner.team;
          p.find(team => {
            return team.team === prevPartner
          }).matched = false;
          p.find(team => {
            return team.team === prevPartner
          }).partner[matchOrder] = "";
        }
      }
      x++;
    }
console.log(freeCount);
console.log(p);
  }
  return p
}
function runAlgorithm(){
console.log(preferences);

preferences2 = randomizeRemainingPrefs(preferences);
console.log("xxxxxxxxxxxxxxxxx");
console.log(preferences2);

var results = algorithm(preferences2, 15, 0);
//
console.log(results);
resultsUpdated = removeMatchedPrefs(results);

var results2 = algorithm(resultsUpdated, 14, 1);
return results2
}

const populateHTML = async () => {
  const resultFinal = await runAlgorithm();
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

var tablePrefElement = document.getElementById("preferencesTable");
let dataPref = Object.keys(initPrefs[0]);
generateTable(tablePrefElement, initPrefs);
generateTableHead(tablePrefElement, dataPref);

  var tableElement = document.getElementById("resultTable");
  console.log(tableElement)
  let data = Object.keys(resultFinal[0]);
  generateTable(tableElement, resultFinal); // generate the table first
  generateTableHead(tableElement, data);

  // do something else here after firstFunction completes
}
populateHTML();
