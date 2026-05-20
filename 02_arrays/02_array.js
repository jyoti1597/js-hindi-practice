const marvel_heros = [
    "thoer",
    "ironman",
    "spiderman",
    "hulk",
    "captain america"
];
const dc_heros = [
    "superman",
    "batman",
    "wonder woman",
    "flash",
    "aquaman"
]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);// does not merge like that, it adds the whole array as a single element

//console.log(marvel_heros[3],[1]);// hulk and flash


const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);// does not change the original array, it returns a new array with the merged elements