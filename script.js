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

const btnGoKlad = document.getElementById('goKlad');
const btnGoDeal = document.getElementById('goDeal');
const btnGoShop = document.getElementById('goShop');
const btnGoHome = document.getElementById('goHome');
//Кнопки

function restart() {
    if (food <= 0) {
        information.innerHTML = `ТИ ЗДОХ ОТ ГОЛОДА ДОВБОЙОБ! Граєм по новому <br> <br>
         Ти бухав всю ніч. Ти Тудор і тобі дуже хуйово.<br> Ти намацав у себе в кармані пятку, вже непогано!`;

         firstButtons();

        weed = 1;
        stWeed.innerHTML = weed;
        high = 0;
        stHigh.innerHTML = high;
        food = 80;
        stFood.innerHTML = food;
    }
} //РЕСТАРТ ИГРЫ
function ifHigh() {
    if (high >= 100) {
        information.innerHTML = `Ти поймав блєдного. Гра пройдена!`;

    document.getElementsByClassName('button')[0].style= "display: none";
    document.getElementsByClassName('button')[1].style= "display: none";
    document.getElementsByClassName('button')[2].style= "display: none";
    document.getElementsByClassName('button2')[0].style= "display: none";
    document.getElementsByClassName('button2')[1].style= "display: none";
    document.getElementsByClassName('button2')[2].style= "display: none";
    }
}//Проверка на high
function firstButtons() {
    document.getElementsByClassName('button')[0].style= "display: table";
    document.getElementsByClassName('button')[1].style= "display: table";
    document.getElementsByClassName('button')[2].style= "display: table";
    document.getElementsByClassName('button2')[0].style= "display: none";
    document.getElementsByClassName('button2')[1].style= "display: none";
    document.getElementsByClassName('button2')[2].style= "display: none";
    document.getElementsByClassName('button2')[3].style= "display: none";
}//ВИДНО ТОЛЬКО ПЕРВЫЕ ТРИ КНОПКИ
function secondButtons() {
    document.getElementsByClassName('button')[0].style= "display: none";
    document.getElementsByClassName('button')[1].style= "display: none";
    document.getElementsByClassName('button')[2].style= "display: none";
    document.getElementsByClassName('button2')[0].style= "display: table";
    document.getElementsByClassName('button2')[1].style= "display: table";
    document.getElementsByClassName('button2')[2].style= "display: table";
    document.getElementsByClassName('button2')[3].style= "display: table";
}//ВИДНО СЛЕДУЮЩИЕ ЧЕТЫРЕ КНОПКИ

function goHome() {
    information.innerHTML = `Ти прийшов додому`;

    firstButtons();
}

function goShit() {
    --food;
    stFood.innerHTML = food;
    information.innerHTML = `Ти вийшов на вулицю. Шо думаєш робить далі, куди підем?`;

    secondButtons();
}
function goHigh() {
    if (weed) {
        --weed;
        high += Math.ceil(Math.random() * 10);
        stHigh.innerHTML = high;
        stWeed.innerHTML = weed;
        information.innerHTML = `Закашлявся кха кх... кхах..`;

        food -= 10;
        stFood.innerHTML = food;
        restart();
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
function goKlad() {
    ++weed;
    stWeed.innerHTML = weed;
    information.innerHTML = `Ти найшов в заброшкі священний коробок (+1 weed  -4 hungry)`;
    food -= 4;
    stFood.innerHTML = food;
    restart();
}
function goDeal() {
    weed += 3;
    stWeed.innerHTML = weed;
    information.innerHTML = `Snoop Dogg дав тобі нігерський блант (+3 weed  -15 hungry)`;
    food -= 15;
    stFood.innerHTML = food;
    restart();
}
function goShop() {
    weed += 10;
    stWeed.innerHTML = weed;
    information.innerHTML = `Ти купив пачку бошок. Хто зна за які гроші (+10 weed  -50 hungry)`;
    food -= 50;
    stFood.innerHTML = food;
    restart();
}


btnGoFood.addEventListener("click", goFood);
btnGoHigh.addEventListener("click", goHigh);
btnGoShit.addEventListener("click", goShit);

btnGoKlad.addEventListener("click", goKlad);
btnGoDeal.addEventListener("click", goDeal);
btnGoShop.addEventListener("click", goShop);
btnGoHome.addEventListener("click", goHome);