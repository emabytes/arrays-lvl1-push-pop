// Lev1_5_1_js-vertiefung_arrays_push()
let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];
songs.push("Madness", "Under Pressure", "Best Of You")
console.log(songs)

//
let bestenFussballerAllerZeiten = ["Modric", "Maradona", "Ronaldo", "Messi", "Zidane"]
bestenFussballerAllerZeiten.push("Khan", "Ladic", "Buffon");
console.log(bestenFussballerAllerZeiten)

//
const artists = ["michael", "elvis"];
artists.push("justin", "charlie");
console.log(artists)
artists.push("somesongicantremember", "songidontlike")
console.log(artists)
artists.push("anass", "georg", "sam")
console.log(artists)

// lev1_5_2
//variable with more than one array
let heroUndEnemy = new Array();
heroUndEnemy[0] = ["Batman", "The Joker"];
heroUndEnemy[1] = ["Professor X", "Magneto"];
heroUndEnemy[2] = ["Thor", "Loki"];
console.log(heroUndEnemy[0]);
console.log(heroUndEnemy[1]);
console.log(heroUndEnemy[2]);
heroUndEnemy.push(["Superman", "Lex Luthor"]);
console.log(heroUndEnemy[3]);

//lev 1_6
let entfernterSong = songs.pop();
console.log(entfernterSong)
console.log(songs)

let entfernterFussballer = bestenFussballerAllerZeiten.pop();
console.log(entfernterFussballer);
console.log(bestenFussballerAllerZeiten);
entfernterFussballer = bestenFussballerAllerZeiten.pop();
console.log(entfernterFussballer);
entfernterFussballer = bestenFussballerAllerZeiten.pop();
console.log(entfernterFussballer);
entfernterFussballer = bestenFussballerAllerZeiten.pop();
console.log(entfernterFussballer);
console.log(bestenFussballerAllerZeiten);

//level 1_7 unshift

let deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];
deutscheGerichte.unshift("Currywurst", "Maultaschen", "Weisswurst", "Linseneintopf", "Kaffee und Kuchen");
console.log(deutscheGerichte);

//1_8 shift
deutscheGerichte.shift([0]);
console.log(deutscheGerichte);
deutscheGerichte.shift([1]);
console.log(deutscheGerichte);
deutscheGerichte.shift([2]);
console.log(deutscheGerichte);

//1_9 Push Pop Shift Unshift Difference
let numbers = [23, 54, 75];
numbers.push(44, 55, 66, 77, 88);
console.log(numbers);
numbers.unshift(1, 2, 3, 4, 5);
console.log(numbers);
numbers.pop();
numbers.pop();
console.log(numbers);
numbers.shift();
numbers.shift();
console.log(numbers);

//Lev1_3_js-vertiefung_arrays_index
let numberArray = [5, 6, 7, 8, 9, 10];
console.log(numberArray);
console.log(numberArray[0]);//5
console.log(numberArray[1]);
console.log(numberArray[2]);
console.log(numberArray[3]);
console.log(numberArray[4]);
console.log(numberArray[5]);
console.log(numberArray.length);//6