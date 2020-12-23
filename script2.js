"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Одни из последних просмотренных фильмов?'),
            b = prompt('На сколько оцените его?');
        if (a != null && b != null && a != '' && b != '' && a.lenght < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы - классический зритель.');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы - киноман.');
    } else {
        console.log('error');
    }
}

// detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`What is your favorite genre number ${i}`);
    }
}
writeYourGenres();

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);