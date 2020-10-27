// var input = {
//   "teams": [{
//       "name": "United States",
//       "id": "375da6f6-cf63-463c-a59d-e8a009435cdc",
//       "type": "team",
//       "participants": ["danara@sharedstudios.com", "ahmed@sharedstudios.com"]
//     },
//     {
//       "name": "Brazil",
//       "id": "6d9a6a54-e86c-4002-8da6-dffac68a545b",
//       "type": "team",
//       "participants": ["siam@sharedstudios.com", "tevin@sharedstudios.com"]
//     },
//     {
//       "name": "India",
//       "id": "72a74a11-51b3-4c44-a160-c9b9013b4f95",
//       "type": "team",
//       "participants": ["luke@sharedstudios.com", "teun@sharedstudios.com"]
//     },
//     {
//       "name": "Abkhazia",
//       "id": "eace22ad-bafa-4059-9e93-cd84827900d2",
//       "type": "team",
//       "participants": ["nina@sharedstudios.com", "nicole@sharedstudios.com"]
//     }
//   ],
//   "experts": [{
//       "name": "expert 1",
//       "id": "expert@gmail.com",
//       "type": "expert"
//     }
//
//   ],
//   "pref": [{
//       "id": "375da6f6-cf63-463c-a59d-e8a009435cdc",
//       "pref": ["expert@gmail.com"]
//     },
//     {
//       "id": "6d9a6a54-e86c-4002-8da6-dffac68a545b",
//       "pref": [
//         "375da6f6-cf63-463c-a59d-e8a009435cdc"
//       ]
//     },
//     {
//       "id": "72a74a11-51b3-4c44-a160-c9b9013b4f95",
//       "pref": []
//     },
//     {
//       "id": "eace22ad-bafa-4059-9e93-cd84827900d2",
//       "pref": []
//     }
//   ]
// }
var input = {
    "total_pref": 14,
    "total_teams": 14,
    "teams": [
        {
            "name": "Turkey",
            "id": "0b1e4db1-05a8-451e-b899-4544466d354f",
            "type": "team",
            "participants": [
                "danara@sharedstudios.com"
            ]
        },
        {
            "name": "Belgium",
            "id": "18159330-003d-4966-8ef5-1252b74d977f",
            "type": "team",
            "participants": [
                "veronika.zubo@foreignpolicy.com",
                "zgjim.gjonbalaj@foreignpolicy.com"
            ]
        },
        {
            "name": "South Africa",
            "id": "1a46a436-637b-44a5-8b4e-3d58460c2d95",
            "type": "team",
            "participants": [
                "sherri.greeves@foreignpolicy.com",
                "sohrab.azad@foreignpolicy.com",
                "susan.sadigova@foreignpolicy.com"
            ]
        },
        {
            "name": "Japan",
            "id": "500e92a9-f7c9-49c2-91c4-47086967cdb5",
            "type": "team",
            "participants": [
                "rachel.mines@foreignpolicy.com",
                "rob.sachs@foreignpolicy.com"
            ]
        },
        {
            "name": "Barbados",
            "id": "5c998b84-daf7-4397-a6c5-01bb3731a9b8",
            "type": "team",
            "participants": [
                "kara.francois@foreignpolicy.com",
                "laurel.fioravanti@foreignpolicy.com"
            ]
        },
        {
            "name": "United Arab Emirates",
            "id": "5ecca2f7-05cb-4af4-a621-387c8eec8d18",
            "type": "team",
            "participants": [
                "lori.kelley@foreignpolicy.com",
                "leah.danville@foreignpolicy.com"
            ]
        },
        {
            "name": "Abkhazia",
            "id": "7a999173-1438-4bb3-86d3-1b886839216b",
            "type": "team",
            "participants": [
                "isabel.schmidt@foreignpolicy.com",
                "jason.lee@foreignpolicy.com",
                "siam@gmail.com"
            ]
        },
        {
            "name": "Russia",
            "id": "80fc0981-5604-4d8a-b235-ad1f1d71cd1b",
            "type": "team",
            "participants": [
                "helen.you@foreignpolicy.com",
                "hannah.lynch@foreignpolicy.com"
            ]
        },
        {
            "name": "Poland",
            "id": "8e360d1a-5360-4ac7-b044-ea75eb00da52",
            "type": "team",
            "participants": [
                "francis.king@foreignpolicy.com",
                "diana.marrero@foreignpolicy.com"
            ]
        },
        {
            "name": "South Korea",
            "id": "95da4555-5d4e-492b-9ddd-d34655c85cc1",
            "type": "team",
            "participants": [
                "claire.furbush@foreignpolicy.com",
                "christian.perez@foreignpolicy.com"
            ]
        },
        {
            "name": "Netherlands",
            "id": "9e418671-3c9a-42ef-9327-2873715df9ae",
            "type": "team",
            "participants": [
                "tevin@sharedstudios.com",
                "tevinmcquilkin@gmail.com"
            ]
        },
        {
            "name": "China",
            "id": "a8913a91-4598-45cc-bfef-555846c7f185",
            "type": "team",
            "participants": [
                "caitlin.oconnell@foreignpolicy.com",
                "catherine.snow@foreignpolicy.com"
            ]
        },
        {
            "name": "Sweden",
            "id": "edcb9a37-87d6-4896-b20e-0d01c20014e0",
            "type": "team",
            "participants": [
                "andrew.baughman@foreignpolicy.com",
                "bryan.flynn@foreignpolicy.com"
            ]
        },
        {
            "name": "Canada",
            "id": "fd71b94c-5105-4a03-99be-f7cba230ba0a",
            "type": "team",
            "participants": [
                "adam.griffiths@foreignpolicy.com",
                "allison.carlson@foreignpolicy.com"
            ]
        }
    ],
    "experts": [
        {
            "name": "Expert2 Expert2",
            "id": "expert2@sharedstudios.com",
            "type": "expert"
        },
        {
            "name": "Expert 1 Expert 1",
            "id": "expert@sharedstudios.com",
            "type": "expert"
        }
    ],
    "pref": [
        {
            "id": "0b1e4db1-05a8-451e-b899-4544466d354f",
            "pref": []
        },
        {
            "id": "18159330-003d-4966-8ef5-1252b74d977f",
            "pref": []
        },
        {
            "id": "1a46a436-637b-44a5-8b4e-3d58460c2d95",
            "pref": []
        },
        {
            "id": "500e92a9-f7c9-49c2-91c4-47086967cdb5",
            "pref": []
        },
        {
            "id": "5c998b84-daf7-4397-a6c5-01bb3731a9b8",
            "pref": []
        },
        {
            "id": "5ecca2f7-05cb-4af4-a621-387c8eec8d18",
            "pref": []
        },
        {
            "id": "7a999173-1438-4bb3-86d3-1b886839216b",
            "pref": []
        },
        {
            "id": "80fc0981-5604-4d8a-b235-ad1f1d71cd1b",
            "pref": []
        },
        {
            "id": "8e360d1a-5360-4ac7-b044-ea75eb00da52",
            "pref": []
        },
        {
            "id": "95da4555-5d4e-492b-9ddd-d34655c85cc1",
            "pref": []
        },
        {
            "id": "9e418671-3c9a-42ef-9327-2873715df9ae",
            "pref": []
        },
        {
            "id": "a8913a91-4598-45cc-bfef-555846c7f185",
            "pref": []
        },
        {
            "id": "edcb9a37-87d6-4896-b20e-0d01c20014e0",
            "pref": []
        },
        {
            "id": "fd71b94c-5105-4a03-99be-f7cba230ba0a",
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
      p[i]["partner"] = [undefined, undefined];
      p[i]["type"] = "team";
    }
  }
  if (matchOrder == 0) {
    for (e = 0; e < experts.length; e++) {
      p.push({
        id: experts[e],
        pref: [],
        matched: false,
        partner: [undefined, undefined],
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
          }).partner[matchOrder] = undefined;
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
    let expert = initInput.experts.find(o => {
      return o.id === teamID
    });
    let participants = []
    let type = undefined;
    let name = undefined;
    // console.log(team)
    if (team) {
      participants = team.participants;
      type = "team"
      name = team.name;
    }else if (expert) {
      type = "expert"
      name = expert.name;
    }
    let pref = []
    match.partners.forEach(function(part) {
      if (part != undefined) {
        let partnerType = undefined;
        let partnerName = undefined;
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
      }else{
        let partnerObject = undefined;
        pref.push(partnerObject);
      }
    })
    let teamObject = {
      "id": teamID,
      "name":name,
      "type": type,
      "participants": participants,
      "pref": pref

    }
    output.push(teamObject)

  })
  console.log("OUTPUT OF ALGORITHM")
  console.log(JSON.stringify(output))
  return output
}
runAlgorithm(input, false);
