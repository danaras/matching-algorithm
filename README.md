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
team	  matched  partner	  type
A         true      2,F	     participant
B         true      1,H	     participant
C         true      M,D	     participant
D         true      K,C	     participant
E         true      5,L	     participant
F         true      O,A	     participant
G         true      H,2	     participant
H         true      G,B	     participant
I         true      P,O	     participant
J         true      3,N	     participant
L         true      N,E	     participant
K         true      D,M	     participant
M         true      C,K	     participant
N         true      L,J	     participant
O         true      F,I	     participant
P         true      I,5	     participant
1         false     B, 	     expert
2         true      A,G	     expert
3         false     J, 	     expert
4         false      , 	     expert
5         true      E,P	     expert
6         false      , 	     expert
```
