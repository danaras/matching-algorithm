var input = {
  "teams": [{
      "name": "United States",
      "id": "375da6f6-cf63-463c-a59d-e8a009435cdc",
      "type": "team",
      "participants": ["danara@sharedstudios.com", "ahmed@sharedstudios.com"]
    },
    {
      "name": "Brazil",
      "id": "6d9a6a54-e86c-4002-8da6-dffac68a545b",
      "type": "team",
      "participants": ["siam@sharedstudios.com", "tevin@sharedstudios.com"]
    },
    {
      "name": "India",
      "id": "72a74a11-51b3-4c44-a160-c9b9013b4f95",
      "type": "team",
      "participants": ["luke@sharedstudios.com", "teun@sharedstudios.com"]
    },
    {
      "name": "Abkhazia",
      "id": "eace22ad-bafa-4059-9e93-cd84827900d2",
      "type": "team",
      "participants": ["nina@sharedstudios.com", "nicole@sharedstudios.com"]
    }
  ],
  "experts": [{
      "name": "expert 1",
      "id": "expert@gmail.com",
      "type": "expert"
    }

  ],
  "pref": [{
      "id": "375da6f6-cf63-463c-a59d-e8a009435cdc",
      "pref": ["expert@gmail.com"]
    },
    {
      "id": "6d9a6a54-e86c-4002-8da6-dffac68a545b",
      "pref": [
        "375da6f6-cf63-463c-a59d-e8a009435cdc"
      ]
    },
    {
      "id": "72a74a11-51b3-4c44-a160-c9b9013b4f95",
      "pref": []
    },
    {
      "id": "eace22ad-bafa-4059-9e93-cd84827900d2",
      "pref": []
    }
  ]
}


function removeMatchedPrefs(p) {
  for (let i = 0; i < p.length; i++) {
    let restPref = p[i].pref.filter(x => !p[i].partner[0].includes(x));
    p[i].pref = restPref;
  }
  return p

}

function prefersPrevPartnerOverP(preferences, choosingTeam, prevPartner, curPartner, prefCount) {
  for (let i = 0; i < prefCount; i++) {
    if (preferences.find(team => {
        return team.id === choosingTeam
      }).pref[i] == prevPartner) {
      return true
    }
    if (preferences.find(team => {
        return team.id === choosingTeam
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

function randomizeRemainingPrefs(p, teams, teamsLength) {
  for (let i = 0; i < p.length; i++) {

    let remainingPrefs = teams.filter(x => !p[i].pref.includes(x));
    remainingPrefs = remainingPrefs.filter(x => !p[i].id.includes(x));
    shuffle(remainingPrefs);
    p[i].pref = p[i].pref.concat(remainingPrefs);
  }
  return p
}

function algorithm(p, prefCount, matchOrder, experts, teams, startTime) {

  for (let i = 0; i < p.length; i++) {
    p[i]["matched"] = false;
    if (matchOrder == 0) {
      p[i]["partner"] = ["", ""];
      p[i]["type"] = "team";
    }
  }
  if (matchOrder == 0) {
    for (e = 0; e < experts.length; e++) {
      p.push({
        id: experts[e],
        pref: [],
        matched: false,
        partner: ["", ""],
        type: "expert"
      });
    }
  }

  while (p.find(team => {
      return team.matched === false && team.type === "team"
    })) {
    let initTeam = p.find(team => {
      return team.matched === false && team.type === "team"
    });

    let initTeamName = initTeam.id;
    let x = 0;
    while (x < prefCount && p.find(team => {
        return team.id === initTeamName
      }).matched == false) {
      let partner = p.find(team => {
        return team.id === initTeam.pref[x]
      });

      if (partner.matched == false) {
        p.find(team => {
          return team.id === initTeam.pref[x]
        }).matched = true;
        p.find(team => {
          return team.id === initTeamName
        }).matched = true;
        p.find(team => {
          return team.id === initTeam.pref[x]
        }).partner[matchOrder] = initTeamName;
        p.find(team => {
          return team.id === initTeamName
        }).partner[matchOrder] = partner.id;
      } else {

        let prevPartner = p.find(team => {
          return team.id === partner.id
        }).partner[matchOrder];
        if (prefersPrevPartnerOverP(p, partner.id, prevPartner, initTeamName, prefCount) == false) {
          p.find(team => {
            return team.id === partner.id
          }).matched = true;
          p.find(team => {
            return team.id === initTeamName
          }).matched = true;
          p.find(team => {
            return team.id === partner.id
          }).partner[matchOrder] = initTeamName;
          p.find(team => {
            return team.id === initTeamName
          }).partner[matchOrder] = partner.id;
          p.find(team => {
            return team.id === prevPartner
          }).matched = false;
          p.find(team => {
            return team.id === prevPartner
          }).partner[matchOrder] = "";
        }
      }
      x++;
      let currentTime = Date.now() / 1000;
      if (currentTime - startTime > 3) {
        console.log("OVERTIME, RESTARTING")
        p = false
        return p
      }
    }
  }
  return p
}

function runAlgorithm(initInput, stuck) {
  let obj = JSON.parse(JSON.stringify(initInput))
  let startTime = Date.now() / 1000;
  let teamsObj = obj.teams;
  let teams = [];
  teamsObj.forEach(function(team) {
    teams.push(team.id);
  });
  let teamsLength = teams.length;
  console.log("TEAMS")
  console.log(teams)
  let expertsObj = obj.experts;
  let experts = [];
  expertsObj.forEach(function(expert) {
    experts.push(expert.id);
  });
  console.log("EXPERTS")
  console.log(experts)

  let preferences = obj.pref;
  console.log("PREFERENCES")
  console.log(JSON.stringify(preferences));
  if (stuck) {
    console.log("Removing expert");
    preferences.forEach(function(pr) {
      let common = experts.filter(x => pr.pref.includes(x));
      if (common.length > 0) {
        console.log("expert found")
        console.log(common);
        let randomExp = common[Math.floor(Math.random() * common.length)];
        const index = pr.pref.indexOf(randomExp);
        if (index > -1) {
          pr.pref.splice(index, 1);
          console.log("expert removed")
        }
        return
      }
    })
  }
  let preferences2 = randomizeRemainingPrefs(preferences, teams, teamsLength);
  let results = algorithm(preferences2, teamsLength - 1, 0, experts, teams, startTime);
  if (!results) {
    let stuck = true;
    console.log("xxxxxxxxxxxxxxxx")
    console.log("Removing expert and running algorithm again")
    return runAlgorithm(initInput, stuck);
  }
  let resultsUpdated = removeMatchedPrefs(results);
  let results2 = algorithm(resultsUpdated, teamsLength - 2, 1, experts, teams, startTime);
  if (!results2) {
    let stuck = true;
    console.log("xxxxxxxxxxxxxxxx")
    console.log("Removing expert and running algorithm again")
    return runAlgorithm(initInput, stuck);
  }
  let matches = []
  results2.forEach(function(result) {
    matches.push({
      "type": result.type,
      "id": result.id,
      "partners": result.partner
    });
  });
  let output = []
  matches.forEach(function(match) {
    let teamID = match.id;
    let team = initInput.teams.find(o => {
      return o.id === teamID
    });
    let participants = []
    // console.log(team)
    if (team) {
      participants = team.participants;
    }
    let pref = []
    match.partners.forEach(function(part) {
      if (part != "") {
        let partnerType = "";
        let partnerName = "";
        let partnerId = part;
        if (experts.includes(part)) {
          partnerType = "expert"
          partnerName = initInput.experts.find(o => {
            return o.id === partnerId
          }).name;
        } else {
          partnerType = "team"
          partnerName = initInput.teams.find(o => {
            return o.id === partnerId
          }).name;
        }
        let partnerObject = {
          "type": partnerType,
          "name": partnerName,
          "id": partnerId
        }
        pref.push(partnerObject);
      }
    })
    let teamObject = {
      "id": teamID,
      "participants": participants,
      "pref": pref
    }
    output.push(teamObject)

  })
  console.log("OUTPUT OF ALGORITHM")
  console.log(output)
  return output
}
runAlgorithm(input, false);
