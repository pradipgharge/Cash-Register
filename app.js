var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
// var btnNext = document.querySelector("#btn-next");
var btnCheck = document.querySelector("#btn-check");
messageDiv = document.querySelector(".show-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var notesAvailbale = ["2000", "500", "100","20","10","5","1"];
btnCheck.addEventListener("click", clickHandler);

function clickHandler(){
    hideMessage();
    if(Number(billAmount.value) > 0){
        if(Number(cashGiven.value) > Number(billAmount.value)){
            var returnAmount = cashGiven.value - billAmount.value;
            changeCalculator(returnAmount);
        }
        else{
            showMessage("You need to pay more");
        }

    }
    else{
        showMessage("Please enter valid amount");
    }

}

function changeCalculator(amount){
    for(i=0; i<notesAvailbale.length; i++){
        var numberOfNotes = Math.trunc(amount/notesAvailbale[i]);
        var amount = amount % notesAvailbale[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(text){
    messageDiv.style.display = "block";
    messageDiv.innerText = text;
}

function hideMessage(){
    messageDiv.style.display = "none";
}
