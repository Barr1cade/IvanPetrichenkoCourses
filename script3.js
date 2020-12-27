"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
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
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`What is your favorite genre number ${i}`);
            if (genre === null || genre == '') {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        // for (let y = 0; y < personalMovieDB.genres.length; y++) {
        //     console.log(`Favorite genre number ${y+1} - is ${personalMovieDB.genres[y]}`);
        // }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre number ${i+1} - is ${item}`);
        });

    },
    showMyDB: function() {
        if (personalMovieDB.private == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private == false) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    }
};


// rememberMyFilms();

// detectPersonalLevel();

// writeYourGenres(); 
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();