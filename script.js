let weed = 1;
let high = 0;
let food = 80;

//Заголовок
const textElement = document.querySelector('.title');
const textElementContent = textElement.innerHTML;
console.log(textElementContent);
//Заголовок

//Статистика. Количество добра
const stWeed = document.querySelector('.statWeed');
const stHigh = document.querySelector('.statHigh');
const stFood = document.querySelector('.statFood');
//Статистика. Количество добра

//Кнопки
const btnGoFood = document.getElementById('goFood');
const btnGoHigh = document.getElementById('goHigh');
const btnGoShit = document.getElementById('goShit');
//Кнопки

function goShit() {
    ++weed;
    stWeed.innerHTML = weed;
}
function goHigh() {
    if (weed) {
        --weed;
        high += Math.ceil(Math.random() * 10);
        stHigh.innerHTML = high;
        stWeed.innerHTML = weed;
    } else {
        alert("Шо ти тягнуть будеш? В тебе нема нічо")
    }
}
function goFood() {
    food += 10;
    stFood.innerHTML = food;
}


btnGoFood.addEventListener("click", goFood);
btnGoHigh.addEventListener("click", goHigh);
btnGoShit.addEventListener("click", goShit);