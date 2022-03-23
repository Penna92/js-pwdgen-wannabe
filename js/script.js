let userName = prompt('Qual è il tuo nome?');
console.log(userName);

let userSurname = prompt('Qual è il tuo cognome?');
console.log(userSurname);

let color = prompt('Qual è il tuo colore preferito?');
console.log(color);

let password = userName + userSurname + color + '21' 

document.getElementById('saluto').innerHTML += ' ' + userName + ' ' + userSurname + '!';

document.getElementById('password').innerHTML += userName + userSurname + color + '21';
