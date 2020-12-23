"use strict";
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Одни из последних просмотренных фильмов?'),
        b = prompt('На сколько оцените его?');
    if (a != null && b != null && a != '' && b != '' && a.lenght < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы - классический зритель.');
} else if (personalMovieDB.count > 30) {
    console.log('Вы - киноман.');
} else {
    console.log('error');
}