/* 
Flowchart :

graph TD

A[Chiedo all'utente di inserire il suo nome]-->A1{L'utente scrive qualcosa?}
A1-->|sì| B
A1-->|no| B
B{l'utente preme qualcosa?}
B-->|sì| C{L'utente ha premuto 'ok' ?}
B-->|no| D[Stoppa l'esecuzione dell'algoritmo e attendi]
D-->B
C-->|sì| E[Salva il valore, anche se vuoto, in una variabile]
C-->|no| F[Salva la variabile con il valore 'null']
E-->G
F-->G
G[Chiedo all'utente di inserire il suo cognome]-->G1{L'utente scrive qualcosa?}
G1-->|sì| H
G1-->|no| H
H{l'utente preme qualcosa?}
H-->|sì| I{L'utente ha premuto 'ok' ?}
H-->|no| L[Stoppa l'esecuzione dell'algoritmo e attendi]
L-->H
I-->|sì| N[Salva il valore, anche se vuoto, in una seconda variabile]
I-->|no| O[Salva la seconda variabile con il valore 'null']
N-->P 
O -->P 
P[Chiedo all'utente di inserire il suo colore preferito]-->P1{L'utente scrive qualcosa?}
P1-->|no|Q{l'utente preme qualcosa?}
P1-->|sì|Q
Q-->|sì|Q2{l'utente ha premuto ok ?}
Q-->|no|Q1[Stoppa l'esecuzione dell'algoritmo e attendi]
Q1-->Q
Q2-->|sì|Q3[Salva il valore, anche se vuoto, in una terza variabile]
Q2-->|no|Q4[Salva la terza variabile con il valore 'null']
Q3-->R[crea una password con il valore stringa della prima variabile]
Q4-->R
R-->R1[aggiungi alla password il valore stringa della seconda variabile]
R1-->R2[aggiungi alla password il valore stringa della terza variabile]
R2-->R3[aggiungi alla password la stringa '21']
R3-->R4[stampa la password su schermo]
R4-->Fine 
*/

let userName = prompt('Qual è il tuo nome?');
console.log(userName);

let userSurname = prompt('Qual è il tuo cognome?');
console.log(userSurname);

let color = prompt('Qual è il tuo colore preferito?');
console.log(color);

let password = userName + userSurname + color + '21' 

document.getElementById('saluto').innerHTML += ' ' + userName + ' ' + userSurname + '!';

document.getElementById('password').innerHTML += userName + userSurname + color + '21';
