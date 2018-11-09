let instruktioner = {
    //strängar till instruktioner.
    isClicked: 0,
    
    getExplination: function(){
        
        instruktioner.isClicked++;
        let word = 0;
        if(level === "one"){
            
            
                    }
        else if(level === "two"){
            
            word += 10;
            
        }
        else if(level === "three"){
            
            word += 20;
            
        }
        else if(level === "four"){
            
            word += 30;
            
        }
        else if(level === "five"){
            
            word += 40;
            
        }
        else if(level === "six"){
            
            word += 50;
            
        }
            else if(level === "seven"){
                
                word += 60;
                
            }
            else if(level === "eight"){
                
                word += 70;
                
            
        }  
        else if(level === "nine"){
            
            word += 80;
            
                                                                                                                                
        }

        else if(level === "ten"){
            
            word += 90;
            
                                                                                                                                //90 CyMbal 91 CoNtainer 92 CiTronskiva 93 CaBriolet 94 CyKlopöga 95 CeRat 96 CaPotasto 97 CD-skiva 98 CyLinder 99 CoCktail
        }
        
        else if(level === "konsonant"){
            document.getElementById("msg").innerHTML = "Varje konsonant är kopplad till en siffra, plugga konsonantkodningen som hjälp för att lära dig figurkoderna.<br> varje stor bokstav i figurkoderna är koden för sifferparet."

            document.getElementById("ord0").innerHTML = "M: ";
            document.getElementById("ord1").innerHTML = "N: ";
            document.getElementById("ord2").innerHTML = "THZ: ";
            document.getElementById("ord3").innerHTML = "B: ";
            document.getElementById("ord4").innerHTML = "WVK: ";
            document.getElementById("ord5").innerHTML = "FR: ";
            document.getElementById("ord6").innerHTML = "JPX: ";
            document.getElementById("ord7").innerHTML = "SD: ";
            document.getElementById("ord8").innerHTML = "GQL: ";
            document.getElementById("ord9").innerHTML = "C: ";
            
            document.getElementById("nummer0").innerHTML = "00";
            document.getElementById("nummer1").innerHTML = "01";
            document.getElementById("nummer2").innerHTML = "02";
            document.getElementById("nummer3").innerHTML = "03";
            document.getElementById("nummer4").innerHTML = "04";
            document.getElementById("nummer5").innerHTML = "05";
            document.getElementById("nummer6").innerHTML = "06";
            document.getElementById("nummer7").innerHTML = "07";
            document.getElementById("nummer8").innerHTML = "08";
            document.getElementById("nummer9").innerHTML = "09";
        }

        else if(level === "memorering"){
            document.getElementById("msg").innerHTML = "Varje sifferpar visas i 6 sekunder, koppla sifferparets figurkod till föregående figurkod i 6 sekunder tills tiden är slut, skriv sedan in ett par i taget."
        }

        //skriver in alla svaren i ett table och en instruktion.
        if(level !== "konsonant" && level !== "memorering"){
            for(i = 0; i < 10 ; i++){
                document.getElementById("msg").innerHTML = "Varje ord är en figurkod för ett siffer par. Försök att visualisera ordet innan du svarar. ";
                document.getElementById("ord" + i).innerHTML = figurKoder[word] + ":";
                document.getElementById("nummer" + i).innerHTML = figurKoder.indexOf(figurKoder[word]);
                word++;
            }

        }
        
        
        if(instruktioner.isClicked == 2){
            console.log("hej");
            for(i = 0; i < 10 ; i++){
                document.getElementById("msg").innerHTML = "";
                document.getElementById("ord" + i).innerHTML = "";
                document.getElementById("nummer" + i).innerHTML = "";
                
    
            }
            instruktioner.isClicked = 0;
        }
    }
    

}