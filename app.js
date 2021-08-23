var billAmount = document.querySelector("#bill-amount");
var btnNext = document.querySelector("#btn-next");

var cashGiven = document.querySelector("#cash-given");
var cashGivendiv = document.querySelector(".cash-given-div")
var btnCheck = document.querySelector("#btn-check");

messageDiv = document.querySelector(".show-message");
var cashReturnDiv = document.querySelector(".cash-return-div");

var noOfNotes = document.querySelectorAll(".no-of-notes");
var arrayOfNotes = ["2000", "500", "100","20","10","5","1"];

btnNext.addEventListener("click", clickHandlerOne);
btnCheck.addEventListener("click", clickHandlerTwo);




function clickHandlerOne(){
    hideMessage();
    if(Number(billAmount.value) > 0){
        btnNext.style.display = "none";
        cashGivendiv.style.display = "block";
        btnCheck.style.display = "block";
    }
    else{
        showMessage("Please enter a valid bill amount !");
    }
}

function clickHandlerTwo(){
    if( Number(cashGiven.value)){
        if(Number(cashGiven.value) >= Number(billAmount.value))
        {
            var returnAmount = Number(cashGiven.value) - Number(billAmount.value);
            changeCalculator(returnAmount);
        }
        else{
            cashReturnDiv.style.display = "none";
            showMessage("Cash given should be more than the bill amount !");
        }
    }
    else{
        cashReturnDiv.style.display = "none";
        showMessage("Please enter a valid a cash given amount !");
    }

}

function changeCalculator(amount){

    if(amount === 0){
        showMessage("You have paid the right amount. No change is leftover");
    }
    else{
        hideMessage();
        cashReturnDiv.style.display = "block";
        for(i=0; i<arrayOfNotes.length; i++){
            while(amount >= arrayOfNotes[i])
            {
                var numberOfNotes = Math.trunc(amount/arrayOfNotes[i]);
                noOfNotes[i].innerText = numberOfNotes;
                amount = amount % arrayOfNotes[i];
            }
        }
    }
    
}

function showMessage(text){
    messageDiv.style.display = "block";
    messageDiv.innerText = text;
}

function hideMessage(){
    messageDiv.style.display = "none";
}

