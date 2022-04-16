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
    information.innerHTML = `Рєшнув бошку, красава.`;
    food -= 4;
    stFood.innerHTML = food;
    if (food <= 0) {
        information.innerHTML = `ТИ ЗДОХ ОТ ГОЛОДА ДОВБОЙОБ! Граєм по новому <br> <br>
         Ти бухав всю ніч. Ти Тудор і тобі дуже хуйово.<br> Ти намацав у себе в кармані пятку, вже непогано!`;
        weed = 1;
        stWeed.innerHTML = weed;
        high = 0;
        stHigh.innerHTML = high;
        food = 80;
        stFood.innerHTML = food;
    }
}
function goHigh() {
    if (weed < 100 && weed) {
        --weed;
        high += Math.ceil(Math.random() * 10);
        stHigh.innerHTML = high;
        stWeed.innerHTML = weed;
        information.innerHTML = `Закашлявся кха кх... кхах..`;

        food -= 10;
        stFood.innerHTML = food;
        if (food <= 0) {
            information.innerHTML = `ТИ ЗДОХ ОТ ГОЛОДА ДОВБОЙОБ! Граєм по новому <br> <br>
             Ти бухав всю ніч. Ти Тудор і тобі дуже хуйово.<br> Ти намацав у себе в кармані пятку, вже непогано!`;
            weed = 1;
            stWeed.innerHTML = weed;
            high = 0;
            stHigh.innerHTML = high;
            food = 80;
            stFood.innerHTML = food;
        }
    } else {
        information.innerHTML = `Шо ти тягнуть будеш? В тебе нема нічого, дурло!`;
    }
}
function goFood() {
    if (food < 100) {
        food += 10;
        information.innerHTML = `Яка ж тіки смакота та ти шоо`;
        if (food >= 100) {
            food = 100;
        }
        stFood.innerHTML = food;


        high -=4;
        if (high < 0) {
            high = 0;
        }
        stHigh.innerHTML = high;
    } else {
        information.innerHTML = `Ти вже плотно похавав, хвате`;
    }
}


btnGoFood.addEventListener("click", goFood);
btnGoHigh.addEventListener("click", goHigh);
btnGoShit.addEventListener("click", goShit);