let facit = {
    getPoints: function(){
        dittSvar = elFocus.value;
        let elMsg = document.getElementById("msg");
        if(dittSvar == rättSvar){
            points++;
            elMsg.innerText = "Rätt svar du har " + points + " poäng.";
        }else{
            points--;
            elMsg.innerText = "Fel svar du har " + points + " poäng.";
        }
    }
}