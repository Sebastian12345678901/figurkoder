let question = {
    getQuestion: function() {
        // dittSvar = elFocus.value;
        // let elMsg = document.getElementById("msg");
        // if(dittSvar == rättSvar){
        //     points++;
        //     elMsg.innerText = "Rätt svar du har " + points + " poäng.";
        // }else{
        //     points--;
        //     elMsg.innerText = "Fel svar du har " + points + " poäng.";
        // }

        elFocus.value = "";
        elFocus.focus();
        if (level == "one") {
            randomArray = random.random09();
            rättSvar = randomArray[1];
            elQuestion.innerHTML = randomArray[0];
        } else if (level == "two") {
            randomArray = random.random19();
            rättSvar = randomArray[1];
            elQuestion.innerHTML = randomArray[0];
        } else if (level == "three") {
            randomArray = random.random29();
            rättSvar = randomArray[1];
            elQuestion.innerHTML = randomArray[0];
        } else if (level == "four") {
            randomArray = random.random39();
            rättSvar = randomArray[1];
            elQuestion.innerHTML = randomArray[0];
        } else if (level == "five") {
            randomArray = random.random49();
            rättSvar = randomArray[1];
            elQuestion.innerHTML = randomArray[0];
        } else if (level == "six") {
            randomArray = random.random59();
            rättSvar = randomArray[1];
            elQuestion.innerHTML = randomArray[0];
        } else if (level == "seven") {
            randomArray = random.random69();
            rättSvar = randomArray[1];
            elQuestion.innerHTML = randomArray[0];
        } else if (level == "eight") {
            randomArray = random.random79();
            rättSvar = randomArray[1];
            elQuestion.innerHTML = randomArray[0];
        } else if (level == "nine") {
            randomArray = random.random89();
            rättSvar = randomArray[1];
            elQuestion.innerHTML = randomArray[0];
        } else if (level == "ten") {
            randomArray = random.random99();
            rättSvar = randomArray[1];
            elQuestion.innerHTML = randomArray[0];
        }

    }

}