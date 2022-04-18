let weed = 1;
let high = 0;
let food = 80;
let money = 32;
let dolg = 0;
let sell;

//Заголовок
const textElement = document.querySelector('.title');
const textElementContent = textElement.innerHTML;
console.log(textElementContent);
//Заголовок

//Информация
const information = document.getElementById('information');
//Информация

//Статистика. Количество добра
const stWeed = document.getElementById('statWeed');
const stHigh = document.getElementById('statHigh');
const stFood = document.getElementById('statFood');
const stMoney = document.getElementById('statMoney');
//Статистика. Количество добра

//Кнопки
const btnGoFood = document.getElementById('goFood');
const btnGoHigh = document.getElementById('goHigh');
const btnGoShit = document.getElementById('goShit');
const btnGoHust = document.getElementById('goHust');

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
        money = 32;
        stMoney.innerHTML = money;
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

/////////////////////////КНОПКИ 1
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
function goHust() {
    sell = prompt("Кіко продать хочеш? Введи кількість від 1 до 5", []);
    if (sell && sell <= 5) {
        if (weed >= sell) {
            let sellMoney = sell * 10;
            information.innerHTML = `Ти успішно продав ${sell} грамів  (+ ${sellMoney}₴)`;
            money += sellMoney;
            stMoney.innerHTML = money;
            weed -= sell;
            stWeed.innerHTML = weed;
        } else {
            information.innerHTML = `В тебе нема скіко, тупка.`;
        }
    } else {
        information.innerHTML = `Можна продавати лише від 1 до 5 грамів`;
    }
}

//////////////////////////////КНОПКИ 2
function goKlad() {
    let r = Math.ceil(Math.random() * 10);
    if (r >= 5) {
        ++weed;
        stWeed.innerHTML = weed;
        information.innerHTML = `Ти найшов в заброшкі священний коробок (+1 weed  -4 hungry)`;
        food -= 4;
        stFood.innerHTML = food;
    } else {
        weed -= 2;
        stWeed.innerHTML = weed;
        food -= 8;
        stFood.innerHTML = food;
        information.innerHTML = `Ти найшов пизди (-2 weed -8 hungry)`;
    }
    restart();
}
function goDeal() {
    let r = Math.ceil(Math.random() * 10);
    if (r >= 4) {
        weed += 3;
        stWeed.innerHTML = weed;
        information.innerHTML = `Snoop Dogg дав тобі нігерський блант (+3 weed  -15 hungry)`;
        food -= 15;
        stFood.innerHTML = food;
    } else {
        information.innerHTML = `Snoop Dogg вистрелив в тебе з травмата (-30 hungry)`;
        food -= 30;
        stFood.innerHTML = food;
    }
    restart();
}
function goShop() {
    if (money >= 30) {
        weed += 10;
        stWeed.innerHTML = weed;
        information.innerHTML = `Ти купив пачку бошок за 30₴ (+10 weed)`;
        money -= 30;
        stMoney.innerHTML = money;
    } else {
        information.innerHTML = `В тебе не вистачає грошей (- 10 hungry)`;
        food -= 10;
        stFood.innerHTML = food;
    }
    restart();
}
function goHome() {
    information.innerHTML = `Ти прийшов додому`;

    firstButtons();
}

btnGoFood.addEventListener("click", goFood);
btnGoHigh.addEventListener("click", goHigh);
btnGoShit.addEventListener("click", goShit);
btnGoHust.addEventListener("click", goHust);

btnGoKlad.addEventListener("click", goKlad);
btnGoDeal.addEventListener("click", goDeal);
btnGoShop.addEventListener("click", goShop);
btnGoHome.addEventListener("click", goHome);