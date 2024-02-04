/* const uczniowie = [
  { wiek: 20, imie: "Jan", nazwisko: "Kowalski" },
  { wiek: 25, imie: "Marek", nazwisko: "Nowak" },
  { wiek: 30, imie: "Anna", nazwisko: "Kowalska" },
];
// console.log(uczniowie);
// in zwróci indexy//klucze
for (const uczen of uczniowie) {
  console.log(uczen);
}

const zero = {};
zero.A = 23;
//console.log(zero);

for (let i = 0; i < 10; i++) {
  console.log("to:", i);
}

// const date = new Date();
// const hours = date.getHours();
// const minutes = date.getMinutes();

// if (hours === 18 && minutes === 55) {
//   console.log("Godzina 18:55");
// } else {
//   console.log("nie XD");
// }
const liczby = (...args) => {
  //   debugger;
  const tab = [];
  for (const liczba of args) {
    tab.push(liczba + 2);
  }
  return tab;
};
// console.log("Funk: ", liczby(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const jeden = 10;
const dwa = "20";
const sprawdz = (a, b) => {
  return b + a;
};
// console.log(sprawdz(jeden, dwa));

const a = 10;
const obj = { wiek: "24", imie: "Karo" };
// !obiekt docelowy
const arr = [1, 2, 3, 4, 5];
// !obiekt źródłowy Właściwości wiek i imie z obj są kopiowane do arr, ale nie są one indeksowane jak elementy tablicy.
const ass = Object.assign(arr, obj);
console.log(ass);
// console.log(ass.imie);
// for (let assis of ass) {
//   console.log(assis);
// }

// console.log("Indexy:", uczniowie[0 ? 0 : 1]);
*/

/* 
masz tabelę uczniowe, która zawiera uczniów.
do kursu chcą zapisać się bliźniacy 
z pomocą pętli dodaj ich bliźniaków, który naztwają się tak samo, ale na drugie imię mają Zenon.
i każdy  bliźniak jest młoszy o rok

sprawdź rezultat (cl)
*/

const uczniowie = [
  { wiek: 20, imie: "Jan", nazwisko: "Kowalski" },
  { wiek: 25, imie: "Marek", nazwisko: "Nowak" },
  { wiek: 30, imie: "Anna", nazwisko: "Kowalska" },
];
let blizniacy = [];
for (let uczen of uczniowie) {
  blizniacy.push(
    { ...uczen },
    {
      ...uczen,
      wiek: uczen.wiek + 1,
      imie: uczen.imie + " Zenon",
    }
  );
}
// const nowyArr = Object.assign(uczniowie, blizniacy);
console.log(blizniacy);
