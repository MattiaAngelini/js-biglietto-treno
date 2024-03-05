// PROGRAMMA:
// Calcolare prezzo totale del viaggio in base a km percorsi ed età passeggero,
// considerando che:
// - Ogni km percorso costa 0.21€ 
// - Ad ogni passeggero con età inferiore a 18 anni va applicato sconto
//   del 20%.
// - Ad ogni passeggero con età superiore a 65 anni va applicato sconto
//   del 40%.
//   Il prezzo totale dev'essere espresso con massimo due decimali.

// Chiediamo quanti km vuole percorrere il passeggero.
let kmTrip = parseInt(prompt("Quanti km vuoi percorrere?"));

// Chiediamo l'età del passeggero
let passengerAge = parseInt(prompt("Quanti anni hai?"));

// Moltiplichiamo km percorsi per 0.21€.
let priceForKm = (kmTrip * 0.21);

// Creiamo sconto 20% per passeggeri con età inferiore 18 anni.
let discount20;
if (passengerAge < 18) {
    discount20 = priceForKm * (20/100);
}
// Creiamo sconto 40% per passeggeri con età superiore 65 anni.
let discount40;
if (passengerAge > 65) {
    discount40 = priceForKm * (40/100);
}

