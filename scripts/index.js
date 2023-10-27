"use strict";

window.onload = init;



function init() {
    const totalCostBtn = document.getElementById("totalCostBtn");
    totalCostBtn.onclick = totalCostBtnClicked;
    }

function addedOptions() {
    let tollTagChkBox = document.getElementByid("tollTag");
    tollTagChkBox.onclick = onTollTagChkBoxClicked;
    let gpsChkBox = document.getElementByid("gps");
    gpsChkBox.onclick = onGpsChkBoxClicked;
    let roadsideAssistanceChkBox = document.getElementByid("roadsideAssistance");
    roadsideAssistanceChkBox.onclick = onRoadsideAssistanceChkBoxClicked;
}

function onTollTagChkBoxClicked () {
    let tollTag = document.getElementByid("tollTag").checked;
    let tollTagFee = 3.95

    if (tollTag) {
        tollTagFee = true
    }
    let gps = document.getElementByid("gps").checked;
    if (tollTag) {
        let tollTagFee = 3.95
    }
}

function totalCostBtnClicked() {
    const inputNumOfDays = document.getElementById("inputNumOfDays");
    let numofDays = inputNumOfDays.value;
    
    let carRentalDue = numofDays * 

    let tollTag = document.getElementById("tollTag");
    let gps = document.getElementByid("gps");
    let roadsideAssistance = document.getElementById("roadsideAssistance");
    
    let basicRentalRate = 29.99
    tollTag = 3.95
    gps = 2.95
    roadsideAssistance = 2.95

    if (tollTag.checked) {
            carRentalDue = 3.95 + 29.99;
    }
    else  if (gps.checked) {
            carRentalDue = 2.95 + 29.99;      
    } 
    else if (roadsideAssistance.checked) {
            carRentalDue = 2.95 + 29.99;
    }
    else {
        carRentalDue = 29.99;
    }


    const outputH6 = document.getElementById("outputH6");
    outputH6.innerHTML = message;
}
