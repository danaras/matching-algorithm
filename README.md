# matching-algorithm

This matching algorithm is an adaptation from stable marriage problem solving algorithm.

In this example we have 16 teams and 6 experts. All teams have submitted top 5 teams/experts they would like to meet with.
The algorithm takes these preferences and creates 2 consecutive meetings for each team.

Input data:

```
var input = {
  "teams": [{
    "type": "team",
    "id": "A",
    "name": "team-A"
  }, {
    "type": "team",
    "id": "B",
    "name": "team-B"
  }, {
    "type": "team",
    "id": "C",
    "name": "team-C"
  }, {
    "type": "team",
    "id": "D",
    "name": "team-D"
  }, {
    "type": "team",
    "id": "E",
    "name": "team-E"
  }, {
    "type": "team",
    "id": "F",
    "name": "team-F"
  }, {
    "type": "team",
    "id": "G",
    "name": "team-G"
  }, {
    "type": "team",
    "id": "H",
    "name": "team-H"
  }, {
    "type": "team",
    "id": "I",
    "name": "team-I"
  }, {
    "type": "team",
    "id": "J",
    "name": "team-J"
  }, {
    "type": "team",
    "id": "K",
    "name": "team-K"
  }, {
    "type": "team",
    "id": "L",
    "name": "team-L"
  }, {
    "type": "team",
    "id": "M",
    "name": "team-M"
  }, {
    "type": "team",
    "id": "N",
    "name": "team-N"
  }, {
    "type": "team",
    "id": "O",
    "name": "team-O"
  }, {
    "type": "team",
    "id": "P",
    "name": "team-P"
  }],
  "experts": [{
    "type": "expert",
    "id": "1",
    "name": "expert-1"
  }, {
    "type": "expert",
    "id": "2",
    "name": "expert-2"
  }, {
    "type": "expert",
    "id": "3",
    "name": "expert-3"
  }, {
    "type": "expert",
    "id": "4",
    "name": "expert-4"
  }, {
    "type": "expert",
    "id": "5",
    "name": "expert-5"
  }],
  "pref": [{
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
  ]
}
```
Results:
```
{"team":A, "partners":2,F}
{"team":B, "partners":1,H}
{"team":C, "partners":L,P}
{"team":D, "partners":K,J}
{"team":E, "partners":5,N}
{"team":F, "partners":O,A}
{"team":G, "partners":M,2}
{"team":H, "partners":N,B}
{"team":I, "partners":P,M}
{"team":J, "partners":3,D}
{"team":L, "partners":C,O}
{"team":K, "partners":D,4}
{"team":M, "partners":G,I}
{"team":N, "partners":H,E}
{"team":O, "partners":F,L}
{"team":P, "partners":I,C}
{"team":1, "partners":B,}
{"team":2, "partners":A,G}
{"team":3, "partners":J,}
{"team":4, "partners":,K}
{"team":5, "partners":E,}
```
