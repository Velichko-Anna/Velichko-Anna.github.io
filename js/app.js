let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF'
tg.MainButton.color = '#00E794'

let item = "";

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        this.MainButton.hide();
    }
    else {
        tg.MainButton.setText("АК-47 | Африканская сетка");
        item = '1';
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        this.MainButton.hide();
    }
    else {
        tg.MainButton.setText("АК-47 | Затерянная земля");
        item = '2';
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        this.MainButton.hide();
    }
    else {
        tg.MainButton.setText("АК-47 | Элитное снаряжение");
        item = '3';
        tg.MainButton.show();
    }
});

btn4.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        this.MainButton.hide();
    }
    else {
        tg.MainButton.setText("АК-47 | Сланец");
        item = '4';
        tg.MainButton.show();
    }
});

btn5.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        this.MainButton.hide();
    }
    else {
        tg.MainButton.setText("АК-47 | Колымага");
        item = '5';
        tg.MainButton.show();
    }
});

btn6.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        this.MainButton.hide();
    }
    else {
        tg.MainButton.setText("АК-47 | Снежный вихрь");
        item = '6';
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
})

let usercard = document.getElementById("usercard")
let p = document.createElement("p")

p.innerText = `${tg.initDataUnsafe.first_name}`

usercard.append(p);