/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function(l1, l2) {
    return l1 * l2
}
console.log("l'area del rettangolo è ", area(6, 8)) //48

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function(a1, a2) {
    if(a1 === a2) {
        return(a1 + a2) *3;
    } else {
        return(a1 + a2);
    }
};
console.log("la somma dei due parametri è ", crazySum(3, 4)) //7

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function(b1, b2) {
    differenzaAssoluta = b1 - b2;
    if(b1 > 19) {
        differenzaAssoluta = differenzaAssoluta * 3;
    }   return differenzaAssoluta;
};
console.log(crazyDiff(23, 19)) //12

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 55;
const boundary = function(n) {
    if(n>=20 && n<=100) {
        console.log("TRUE");
    } else if(n === 400) {
        console.log("TRUE");
    } else {
        console.log("FALSE");
    } return n;
};
console.log(boundary(n)) //TRUE perché è compreso tra 20 e 100(estremi compresi)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const stringa1 = "Registrati anche tu sulla pagina ";
const stringa2 = "EPICODE ";
const epify = function(stringa1) {
 let stringa3 = stringa2 + stringa1;
return stringa3;
};
console.log(epify(stringa1))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 21;
const check3and7 = function(num) {
if(num % 3 === 0) {
risultato = "è divisibile per 3";
console.log(risultato);
} else if(num % 7 === 0) {
    console.log("è divisibile per 7");
} risultato;
};
check3and7(num)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function(stringa2) {
splitStringa2 = stringa2.split(); //DIVIDE LA STRINGA IN UN ARRAY DI CARATTERI SEPARATI-->.split()
reverseArray = splitStringa2.reverse(); //INVERTE L'ORDINE DEGLI ELEMENTI-->.reverse()
joinArray = splitStringa2.join(); //RICOMPILA GLI ELEMENTI DELL'ARRAY IN UNA STRINGA-->.join()
return joinArray
};
console.log(reverseString('EDOCIPE'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function() {

};

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function() {

};

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function() {

};