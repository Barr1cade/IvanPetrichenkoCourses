"use strict";
let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Одни из последних просмотренных фильмов?'),
                b = prompt('На сколько оцените его?');
            if (a != null && b != null && a != '' && b != '' && a.lenght < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы - классический зритель.');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы - киноман.');
        } else {
            console.log('error');
        }
    },

    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let empty = prompt(`What is your favorite genre number ${i+1}`);
            if (empty == '' || empty == null) {
                i--;
            } else {
                personalMovieDB.genres[i] = empty;
            }
        }
        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Favorite genre number ${i+1} is ${element}`);
        });
    },

    showMyDB: function() {
        if (personalMovieDB.private == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private === false) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    }
};

personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB(personalMovieDB.private);