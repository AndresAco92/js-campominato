// il pc deve generare 100 numeri random dal 1 al 100
console.log(num_rdm(100,16))
var i = 0;
var arr_num_giocatore = [];
var limite_tentativi = 84;

var 
while{

}
console.log(arr_num_giocatore)

//funzioni:
//funzione che trova numeri diversi random con indexof che permette che esso parta e cercchi se ogni numero scritto nella stringa ci sia gia cosi cambiano sempre e mai saranno uguali(teoricamente), -1 si riferisce e specifica che la stringa parte da un array vuoto
function num_rdm(max_rdm,num_rdm){
  var arr = [];
  while(arr.length < num_rdm){
    var n = Math.ceil(Math.random()* max_rdm);
    if(arr.indexOf(n) === -1){
      arr.push(n);
    } 
  }
  return arr;
}