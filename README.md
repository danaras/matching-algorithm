# matching-algorithm

This matching algorithm is an adaptation from stable marriage problem solving algorithm.

In this example we have 16 teams and 6 experts. All teams have submitted top 5 teams/experts they would like to meet with.
The algorithm takes these preferences and creates 2 consecutive meetings for each team.

Input data:
team	    pref
A	        2,F,3,N,B
B	        H,1,K,D,N
C	        D,E,G,P,M
D	        5,E,M,K,J
E	        F,N,K,5,L
F	        O,A,B,D,2
G	        2,D,H,F,E
H	        1,O,M,D,P
I	        D,P,G,O,C
J	        E,L,3,C,G
L	        D,K,C,P,I
K	        D,M,O,4,H
M	        P,4,G,N,C
N	        L,D,J,I,A
O	        D,F,L,H,2
P	        N,5,I,B,O

Results:
team	   matched	  partner	   type
A         true	      2,F	     participant
B         true	      1,H	     participant
C	        true	      M,D	     participant
D	        true	      K,C	     participant
E	        true	      5,L	     participant
F	        true	      O,A	     participant
G	        true	      H,2	     participant
H	        true	      G,B	     participant
I	        true	      P,O	     participant
J	        true	      3,N	     participant
L         true	      N,E	     participant
K	        true	      D,M	     participant
M	        true	      C,K	     participant
N	        true	      L,J	     participant
O	        true	      F,I	     participant
P	        true	      I,5	     participant
1	        false	       B,	     expert
2	        true	      A,G	     expert
3	        false	       J,	     expert
4	        false	       ,	     expert
5	        true	      E,P	     expert
6	        false	       ,	     expert
