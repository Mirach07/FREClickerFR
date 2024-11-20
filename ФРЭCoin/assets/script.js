"use strict";

let score = 1000;
let pointsPerClick = 1;
let pointsPerSecond = 0;

let clickMultiplierUpgradeCost = 50;
let pointsPerSecondUpgradeCost = 100;

let ksisSkinCost = 1000;

let clickerImage = document.getElementById("clicker__image");
let scoreCounter = document.getElementById("scoreCounter");

const ksisSkin = document.getElementById("skins__ksis");

let ksisSkinBuyButton = document.getElementById("buy__buttonKsis");
let freSkinBuyButton = document.getElementById("buy__buttonFre");

const clickMultiplierLevel = document.getElementById("clickMultiplier");
const autoClickerLevel = document.getElementById("pointsPerSecond");

const upgrades__clickMultiplier = document.getElementById("upgrades__clickMultiplier");
const upgrades__autoClicker = document.getElementById("upgrades__autoClicker");

const upgradeAutoClickerLevel = document.getElementById("pointsPerSecond__upgrade");
const upgradeClickMultiplierLevel = document.getElementById("clickMultiplier__upgrade");

const skinsFre = document.getElementById("skins__fre");
const skinsKsis = document.getElementById("skins__ksis");



clickerImage.onmousedown = () => {
    enlargeImage();
};

clickerImage.onmouseup = () => {
    score += pointsPerClick;
    scoreCounter.innerHTML = (score);
    resetImageSize();
    checkAbilityToUpgrade();
};



setInterval(autoClicker, 1000);



upgrades__clickMultiplier.onclick = () => {
    if(clickMultiplierUpgradeCost <= score){
        pointsPerClick++;

        score -= clickMultiplierUpgradeCost;
        updateScore();

        clickMultiplierUpgradeCost *= 1.5;
        clickMultiplierUpgradeCost = Math.trunc(clickMultiplierUpgradeCost);

        clickMultiplierLevel.innerHTML = (pointsPerClick);

        document.getElementById("clickMultiplierUpgradeCost").innerHTML = (Math.trunc(clickMultiplierUpgradeCost));
        checkAbilityToUpgrade();

    } else{
        alert("А хомяк потапыч?");
    }
};

upgrades__autoClicker.onclick = () => {
    if(pointsPerSecondUpgradeCost <= score){
        pointsPerSecond++;

        score -= pointsPerSecondUpgradeCost;
        updateScore();

        pointsPerSecondUpgradeCost *= 1.5;
        pointsPerSecondUpgradeCost = Math.trunc(pointsPerSecondUpgradeCost);

        autoClickerLevel.innerHTML = (pointsPerSecond   );

        document.getElementById("pointsPerSecondUpgradeCost").innerHTML = (Math.trunc(pointsPerSecondUpgradeCost));

        checkAbilityToUpgrade();
    
    } else{
        alert("А хомяк потапыч?");
    }
};


skinsKsis.onclick = () => {
    if(ksisSkinCost <= score){
        changeSkinKsis();
        score -= ksisSkinCost;
        updateScore();

        ksisSkinBuyButton.textContent = "Выбрано";

        ksisSkinCost = 10000000;
    } else if(clickerImage.src == "assets/images/ksis.png"){
        alert("You already escaped ФРЭ");
    } else{
        alert("You can't escape ФРЭ");
    }
}







function updateScore(){
    scoreCounter.innerHTML = (score);
}

function enlargeImage(){
    clickerImage.style.transform = "scale(1.1)";
    clickerImage.style.transition = "transform 0.2s ease";
}

function resetImageSize(){
    clickerImage.style.transform = "scale(1)";
    clickerImage.style.transition = "transform 0.2s ease";
}

function autoClicker() {
    score += pointsPerSecond;
    scoreCounter.innerHTML = (score);
    checkAbilityToUpgrade();
}

function changeSkinKsis() {
    clickerImage.src = "assets/images/ksis.png";
}

function checkAbilityToUpgrade() {
    if(score >= clickMultiplierUpgradeCost){
        upgrades__clickMultiplier.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        upgrades__clickMultiplier.style.transform = "scale(1.05)";
    } else{
        upgrades__clickMultiplier.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        upgrades__clickMultiplier.style.transform = "scale(1)";
    }

    if(score >= pointsPerSecondUpgradeCost){
        upgrades__autoClicker.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        upgrades__autoClicker.style.transform = "scale(1.05)";
    } else{
        upgrades__autoClicker.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        upgrades__autoClicker.style.transform = "scale(1)";
    }

    if(score >= ksisSkinCost){
        skinsKsis.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        skinsKsis.style.transform = "scale(1.05)";
    } else{
        skinsKsis.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        skinsKsis.style.transform = "scale(1)";
    }


}