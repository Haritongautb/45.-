/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Орех и паста",
        "Трансформеры",
        "Пикачу",
        "Dota 2",
        "Что здесь не так",
        "Виноваты звезды",
    ]
};


const promoAdv = document.querySelector(".promo__adv");
const images = promoAdv.querySelectorAll("img");
const promoGenre = document.querySelector(".promo__genre");
const promoBG = document.querySelector(".promo__bg");
const promoInteractiveList = document.querySelector(".promo__interactive-list");
const promoInteractiveItem = promoInteractiveList.querySelectorAll(".promo__interactive-item");
const {movies} = movieDB;
const sortedFilmList = movies.sort();
console.log(sortedFilmList);

function deleteReklams(reklama){
    
    for(let image of reklama){
        image.remove();
    }
}

function changeTitle(block, newTitle){
    block.innerText = `${newTitle}`;

}

promoBG.style.background = "url(../img/bg.jpg) center center/cover no-repeat";

// I. мой вариант, но здесь мы не обращаем внимание на количество фильмов, которые там есть 
// promoInteractiveItem.forEach((item, index, arr) => {
//     item.innerText = `${index + 1}. ${sortedFilmList[index]}`;
// });

// II. вариант мой и Ивана - здесь считывается и количество фильмов и от них будет зависеть количество item на странице
promoInteractiveItem.forEach(item => {
    item.remove();
});
// II.a - или можно так удалить все элементы в HTML - так будет быстрее 
// promoInteractiveList.innerHTML = "";


movies.forEach((movie, index, arr) => {
    promoInteractiveList.innerHTML += 
    `<li class="promo__interactive-item">${index+1}. ${movie}
        <div class="delete"></div>
    </li>`;
    console.log(promoInteractiveList.innerHTML);
});


changeTitle(promoGenre, "Драма");
deleteReklams(images);



