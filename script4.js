"use strict";

let games = {
    nes: 'Mario',
    sega: 'Streets of rage',
    snes: 'Yoshi Island',
    psone: 'Silent Hill',
    master: 'Shooter'
};
// delete games.master;
// console.log(games);
// for (let i in games) {
//     // console.log(games[i]);
//     console.log(games[i]);
// }

// console.log();

// for (let y in games) {
//     console.log(y);
// }

const cars = {
    nissan: 'Z350GT',
    bmw: 'X6M',
    mercedes: 'SLS GT',
    lamborghini: {
        black: 'Reventon',
        red: 'Diablo',
        yellow: 'Huracane'
    }
};

// console.log(cars);
// for (let y in cars) {
//     console.log(`Property ${y} has value ${cars[y]}`);
// }
// for (let key in cars) {
//     if (typeof(cars[key]) === 'object') {
//         for (let s in cars[key]) {
//             console.log(`Property ${[s]} has value ${cars[key][s]}`);
//         }
//     } else {
//         console.log(`Property ${key} has value ${cars[key]}`);
//     }
// }

const myFriends = {
    Evta: 23,
    Kuzya: 24,
    Griban: 20,
    cousin: {
        Sanya: 30,
        Serega: 29,
        Zheka: 22,
        Vova: 31
    }
};

function copy(originalObj) {
    let emptyObj = {};
    for (let i in originalObj) {
        emptyObj[i] = originalObj[i];
    }
    return emptyObj;
}
let newMyFriends = copy(myFriends);
console.log(myFriends);
console.log(newMyFriends);

// console.log(Object.keys(positions).length);

// for (let y in positions) {
//     // console.log(`Property ${y} has value ${positions[y]}`);
//     if (typeof(positions[y]) === 'object') {
//         for (let i in positions[y]) {
//             console.log(`Property ${i} has value ${positions[y][i]}`);
//         }
//     } else {
//         console.log(`Property ${y} has value ${positions[y]}`);
//     }
// }