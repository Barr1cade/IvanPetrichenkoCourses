// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// let firstQuest1 = prompt('Один из последних просмотренных фильмов?');
// let movieRate1 = prompt('На сколько оцените его?');

// let firstQuest2 = prompt('Один из последних просмотренных фильмов?');
// let movieRate2 = prompt('На сколько оцените его?');

// personalMovieDB.movies = firstQuest1 + ' : ' + movieRate1 + ' ' + firstQuest2 + ' : ' + movieRate2;
// console.log(personalMovieDB);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const a = prompt('Один из последних просмотренных фильмов?'),
    b = prompt('На сколько оцените его?'),
    c = prompt('Один из последних просмотренных фильмов?'),
    d = prompt('На сколько оцените его?');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);