let weed = 1;
let high = 0;
let food = 80;
let money = 32;
let sell;
let burian = 0;
let days = 0;

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
const btnGoBurr = document.getElementById('goBurr');

const btnGoKlad = document.getElementById('goKlad');
const btnGoDeal = document.getElementById('goDeal');
const btnGoShop = document.getElementById('goShop');
const btnGoHome = document.getElementById('goHome');
//Кнопки

const burrInfo = document.getElementById('burrInfo'); // Шкала сорняка

function restart() {
    if (food <= 0) {
        information.innerHTML = `ТИ ЗДОХ ОТ ГОЛОДА ДОВБОЙОБ! Граєм по новому <br>
        Ти намацав у себе в кармані пятку і пару гривнів на рево, вже непогано!`;

         firstButtons();

        weed = 1;
        stWeed.innerHTML = weed;
        high = 0;
        stHigh.innerHTML = high;
        food = 80;
        stFood.innerHTML = food;
        money = 32;
        stMoney.innerHTML = money;
        burian = 0;
        ifBurr();
    }
} //РЕСТАРТ ИГРЫ
function ifHigh() {
    if (high >= 100) {
        information.innerHTML = `Ти поймав блєдного. Гра пройдена!`;

    document.getElementsByClassName('button')[0].style= "display: none";
    document.getElementsByClassName('button')[1].style= "display: none";
    document.getElementsByClassName('button')[2].style= "display: none";
    document.getElementsByClassName('button')[3].style= "display: none";
    document.getElementsByClassName('button')[4].style= "display: none";
    document.getElementsByClassName('button2')[0].style= "display: none";
    document.getElementsByClassName('button2')[1].style= "display: none";
    document.getElementsByClassName('button2')[2].style= "display: none";
    document.getElementsByClassName('button2')[3].style= "display: none";
    }
}//Проверка на high
function ifBurr() {
    switch (burian) {
        case 10:
            document.getElementById('burrInfo').style="width: 10%";
            break;
        case 20:
            document.getElementById('burrInfo').style= "width: 20%";
            break;
        case 30:
            document.getElementById('burrInfo').style= "width: 30%";
            break; 
        case 40:
            document.getElementById('burrInfo').style= "width: 40%";
            break;
        case 50:
            document.getElementById('burrInfo').style= "width: 50%";
            break;
        case 60:
            document.getElementById('burrInfo').style= "width: 60%";
            break;
        case 70:
            document.getElementById('burrInfo').style= "width: 70%";
            break;
        case 80:
            document.getElementById('burrInfo').style= "width: 80%";
            break;
        case 90:
            document.getElementById('burrInfo').style= "width: 90%";
            break;
        case 100:
            document.getElementById('burrInfo').style= "width: 100%";
            break;
        default:
            document.getElementById('burrInfo').style= "width: 0%";
            break;
    }
}//Проверка на burr
function ifDays() {
    days += 0.2;
    if (days == 30) {
        if (burian < 100) {
            information.innerHTML = `Батьки приїхали і дали пизди за те шо город не убраний!<br>Ти здох от крепкого ляща. Граємо по новому!`;
            firstButtons();

            weed = 1;
            stWeed.innerHTML = weed;
            high = 0;
            stHigh.innerHTML = high;
            food = 80;
            stFood.innerHTML = food;
            money = 32;
            stMoney.innerHTML = money;
            burian = 0;
            ifBurr();
        } else {
            information.innerHTML = `Батьки приїхали і не дали пизди. Празнуєм!!!Тепер треба думать як c'їбаця нахуй звідси<br>+200<img id="miniMoney" src="money.png">`;
            money +=200;
            stMoney.innerHTML = money;
        }
    }
}//Проверка days
function firstButtons() {
    document.getElementsByClassName('button')[0].style= "display: table";
    document.getElementsByClassName('button')[1].style= "display: table";
    document.getElementsByClassName('button')[2].style= "display: table";
    document.getElementsByClassName('button')[3].style= "display: table";
    document.getElementsByClassName('button')[4].style= "display: table";

    document.getElementsByClassName('button2')[0].style= "display: none";
    document.getElementsByClassName('button2')[1].style= "display: none";
    document.getElementsByClassName('button2')[2].style= "display: none";
    document.getElementsByClassName('button2')[3].style= "display: none";
}//ВИДНО ТОЛЬКО ПЕРВЫЕ ТРИ КНОПКИ
function secondButtons() {
    document.getElementsByClassName('button')[0].style= "display: none";
    document.getElementsByClassName('button')[1].style= "display: none";
    document.getElementsByClassName('button')[2].style= "display: none";
    document.getElementsByClassName('button')[3].style= "display: none";
    document.getElementsByClassName('button')[4].style= "display: none";

    document.getElementsByClassName('button2')[0].style= "display: table";
    document.getElementsByClassName('button2')[1].style= "display: table";
    document.getElementsByClassName('button2')[2].style= "display: table";
    document.getElementsByClassName('button2')[3].style= "display: table";
}//ВИДНО СЛЕДУЮЩИЕ ЧЕТЫРЕ КНОПКИ

/////////////////////////КНОПКИ 1
function goShit() {
    food -= 2;
    stFood.innerHTML = food;
    information.innerHTML = `Ти вийшов на вулицю. Шо думаєш робить далі, куди підем?<br>-2<img id="miniFood" src="food.png">`;

    secondButtons();
}
function goHigh() {
    if (weed > 0) {
        --weed;
        h = Math.ceil(Math.random() * 10);
        high += h;
        stHigh.innerHTML = high;
        stWeed.innerHTML = weed;
        information.innerHTML = `Закашлявся кха кх... кхах..<br>+${h}<img id="miniHigh" src="high.jpg">`;

        food -= 10;
        stFood.innerHTML = food;
        restart();
        ifDays();
    } else if (weed < 0) {
        information.innerHTML = `Які тянуть? У тебе нема нічого ше плюс должен комусь`;
    } else {
        information.innerHTML = `Шо ти тягнуть будеш? В тебе нема нічого, дурло!`;
    }
    ifHigh();
}
function goFood() {
    if (food < 100) {
        food += 20;
        information.innerHTML = `Яка ж тіки смакота та ти шоо<br> +20<img id="miniFood" src="food.png">`;
        if (food >= 100) {
            food = 100;
        }
        stFood.innerHTML = food;


        high -=6;
        if (high < 0) {
            high = 0;
        }
        stHigh.innerHTML = high;

        ifDays();
    } else {
        information.innerHTML = `Ти вже плотно похавав, хвате`;
    }
}
function goHust() {
    sell = prompt("Кіко продать хочеш? Введи кількість від 1 до 5", []);
    if (sell && sell <= 5) {
        if (weed >= sell) {
            let r = Math.ceil(Math.random() * 10);
            if (r <= 4) {
                let sellMoney = sell * 10;
                information.innerHTML = `Ти успішно продав ${sell} грамів <img id="miniWeed" src="weed.png"> <br> + ${sellMoney}<img id="miniMoney" src="money.png">`;
                money += sellMoney;
                stMoney.innerHTML = money;
                weed -= sell;
                stWeed.innerHTML = weed;
            } else {
                if (money >= r) {
                    information.innerHTML = `Тебе отпиздили за таку хуйню і забрали всю траву яку ти взяв і пару гривень. <br>-20<img id="miniFood" src="food.png"> -${sell}<img id="miniWeed" src="weed.png"> -${r}<img id="miniMoney" src="money.png">`;
                    weed -= sell;
                    stWeed.innerHTML = weed;
                    food -= 20;
                    stFood.innerHTML = food;
                    money -= r;
                    stMoney.innerHTML = money;
                } else {
                    information.innerHTML = `Тебе отпиздили за таку хуйню і забрали всю траву яку ти взяв.<br> -20<img id="miniFood" src="food.png"> -${sell}<img id="miniWeed" src="weed.png">`;
                    weed -= sell;
                    stWeed.innerHTML = weed;
                    food -= 20;
                    stFood.innerHTML = food;
                }
            }
        } else {
            information.innerHTML = `В тебе нема скіко, тупка.`;
        }
    } else {
        information.innerHTML = `Можна продавати лише від 1 до 5 грамів`;
    }
    restart();
    ++days;
    ifDays();
}
function goBurr() {
    r = Math.ceil(Math.random() * 10);
    if (r < 5) {
        information.innerHTML = `Ти трохи поприбирав бур'ян на городі. <br>-15<img id="miniFood" src="food.png">`;
        burian += 10;
        food -= 15;
        stFood.innerHTML = food;
        ifBurr();
    } else if (r > 5) {
        information.innerHTML = `Ти завзято попахав на городі, але потім поняв шо це не твій огород.<br>-20<img id="miniFood" src="food.png">`;
        food -= 20;
        stFood.innerHTML = food;
    } else {
        information.innerHTML = `Поки ти роздуплявся, тебе уїбала змія за руку. <br>-20<img id="miniFood" src="food.png">`;
        food -= 20;
        stFood.innerHTML = food;
    }
    ifBurr();
    restart();
    ifDays();
}

//////////////////////////////КНОПКИ 2
function goKlad() {
    let r = Math.ceil(Math.random() * 10);
    if (r >= 5) {
        ++weed;
        stWeed.innerHTML = weed;
        information.innerHTML = `Ти найшов в заброшкі священний коробок<br>+1<img id="miniWeed" src="weed.png"> -5<img id="miniFood" src="food.png">`;
        food -= 5;
        stFood.innerHTML = food;
        ifDays();
    } else {
        weed -= 2;
        stWeed.innerHTML = weed;
        food -= 10;
        stFood.innerHTML = food;
        information.innerHTML = `Ти найшов пизди<br>-2<img id="miniWeed" src="weed.png"> -10<img id="miniFood" src="food.png">`;
        ifDays();
    }
    restart();
}
function goDeal() {
    let r = Math.ceil(Math.random() * 10);
    if (r >= 4) {
        weed += 3;
        stWeed.innerHTML = weed;
        information.innerHTML = `Snoop Dogg дав тобі нігерський блант<br>+3<img id="miniWeed" src="weed.png"> -15<img id="miniFood" src="food.png">`;
        food -= 15;
        stFood.innerHTML = food;
    } else {
        information.innerHTML = `Snoop Dogg вистрелив в тебе з травмата<br>-30<img id="miniFood" src="food.png">`;
        food -= 30;
        stFood.innerHTML = food;
    }
    ++days;
    restart();
    ifDays();
}
function goShop() {
    if (money >= 30) {
        weed += 10;
        stWeed.innerHTML = weed;
        information.innerHTML = `Ти купив пачку бошок за 30<img id="miniMoney" src="money.png"><br>+10<img id="miniWeed" src="weed.png">`;
        money -= 30;
        stMoney.innerHTML = money;
    } else {
        information.innerHTML = `В тебе не вистачає грошей. Ти розізлився, вдарив стіну і вибив собі палець<br>-10<img id="miniFood" src="food.png">`;
        food -= 10;
        stFood.innerHTML = food;
    }
    restart();
    ifDays();
}
function goHome() {
    food -= 2;
    stFood.innerHTML = food;
    information.innerHTML = `Ти прийшов додому<br>-2<img id="miniFood" src="food.png">`;

    firstButtons();
}

btnGoFood.addEventListener("click", goFood);
btnGoHigh.addEventListener("click", goHigh);
btnGoShit.addEventListener("click", goShit);
btnGoHust.addEventListener("click", goHust);
btnGoBurr.addEventListener("click", goBurr);

btnGoKlad.addEventListener("click", goKlad);
btnGoDeal.addEventListener("click", goDeal);
btnGoShop.addEventListener("click", goShop);
btnGoHome.addEventListener("click", goHome);