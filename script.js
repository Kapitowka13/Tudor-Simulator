let weed = 1;
let high = 0;
let food = 80;

//Заголовок
const textElement = document.querySelector('.title');
const textElementContent = textElement.innerHTML;
console.log(textElementContent);
//Заголовок

//Информация
const information = document.getElementById('information');
//Информация

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
        food -= 20;
        stFood.innerHTML = food;
    } else {
        information.innerHTML = `Шо ти тягнуть будеш? В тебе нема нічого, дурло!`;
    }
}
function goFood() {
    if (food < 100) {
        food += 10;
        if (food >= 100) {
            food = 100;
        }
        stFood.innerHTML = food;
    } else {
        information.innerHTML = `Ти вже плотно похавав, хвате`;
    }

    high -=10;
    if (high < 0) {
        high = 0;
    }
    stHigh.innerHTML = high;
}


btnGoFood.addEventListener("click", goFood);
btnGoHigh.addEventListener("click", goHigh);
btnGoShit.addEventListener("click", goShit);