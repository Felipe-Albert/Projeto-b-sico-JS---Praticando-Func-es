const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");
const title = document.getElementById("title");


function lampIsBroken() {
    return lamp.src.indexOf ("quebrada") > -1;
}

function lampOn() {
    if (!lampIsBroken()) {
    lamp.src = "./assets/ligada.png";
    }
}

function lampOff() {
    if (!lampIsBroken()) {
        lamp.src = "./assets/desligada.png";
    }
}

function lampBroken() {
    lamp.src = "./assets/quebrada.png";
}

function visibleTitle() {
    title.style.opacity = "1";
}

function titleBack() {
    title.style.opacity = "0.3";
}


turnOn.addEventListener ("click", lampOn);
turnOff.addEventListener ("click", lampOff);
lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener ("mouseout", lampOff);
lamp.addEventListener ("dblclick", lampBroken);
title.addEventListener ("mouseover", visibleTitle);
title.addEventListener ("mouseout", titleBack);
