let memorering = {
    memoreringIsClicked: 0,
    myArray: [],
    yourAnswer: [],
    pares: 5,
    span: 10,
    
    getPares: function(){
        
        this.pares = document.getElementById("pares").value
        document.getElementById("pares").value = "";
        if(this.pares < 1){
            this.pares = 5;
        }
        console.log(this.pares);
    },

    getSpan: function(){
        this.span = document.getElementById("span").value;
        document.getElementById("span").value = "";
        if(this.span < 1){
            this.span = 10;
        }
        console.log(this.span);
    },

    //skapar en array med random nummer i par 1-100.
    getArray: function(){
        let randomArray = [];
        for(i = 0 ; i < memorering.pares ; i++){
            randomArray.push(Math.round(Math.random()*memorering.span));
            
            
        }
        console.log(randomArray);
        this.myArray = randomArray;
        return randomArray;
    },
    //skriver ut alla nummer i en intervall och skapar facit knappen 
    getMemoryNumeber: function() {
        memorering.memoreringIsClicked++;//kollar ifall man har valt memorerings nivån igen.
        if(memorering.memoreringIsClicked > 1){
            memorering.memoreringIsClicked = 1;
        }
        console.log(memorering.memoreringIsClicked);
        
        //tar bor instruktionerna
        document.getElementById("question").innerText = "Tryck på start för att börja!";
        document.getElementById("divMem").style.display = "block";
        document.getElementById("start").style.display = "inline";
        document.getElementById("start").onclick = start;
        // function test(){alert("hej")};


        //tömmer alla instruktioner
        for(x = 0; x < 10 ; x++){
            document.getElementById("msg").innerHTML = "";
            document.getElementById("ord" + x).innerHTML = "";
            document.getElementById("nummer" + x).innerHTML = "";
        }
        
        
        level = "memorering";
        //startar minnes intervallen med hjälp av startKnappen
        function start(){
                memorering.memoreringIsClicked++
                if(memorering.memoreringIsClicked === 1){
                    memorering.memoreringIsClicked = 2;
                }
                console.log(memorering.memoreringIsClicked);            
                document.getElementById("msg").innerHTML = "";
                
                btn.style.display = "none";
                let array = memorering.getArray();
                
                let elQuestion = document.getElementById("question");
                let i = 0;

                elQuestion.innerText = "";
                if(array[0] < 10){
                    elQuestion.innerHTML += "0";//lägger till en nolla för tal under 10.
                
                }
                
                elQuestion.innerText += array[0];//lägger till det första talet innan intervallen.
                
                // -------startat memoreringen-----------------------------------------------
                

                    let myInterval = setInterval(function(){
                    
    
                        
                            
                            if(memorering.memoreringIsClicked === 2){

                                if(level !== "memorering"){
                                    clearInterval(myInterval);
                                }
                                if(level === "memorering"){
                                    elQuestion.innerText = "";
                                    if(array[i + 1] < 10){
                                        elQuestion.innerHTML += "0";
                                    }
                                    elQuestion.innerText += array[i + 1];//plus ett för att den första redan är utskriven
                                    //ändrar färgen på siffrorna ifall dom är samma.
                                    if(array[i] === array[i + 1])
                                    {   
                                        elQuestion.style.color = "red";
                                    }else{
                                        elQuestion.style.color = "midnightblue";
                                    }
                                    if(array[i] === array[i + 1] && array[i - 1]  === array[i + 1]){
                                        elQuestion.style.color = "midnightblue";
                                    }
                                    if(array[i] === array[i + 1] && array[i - 1]  === array[i + 1] && array[i - 2]  === array[i + 1]){
                                        elQuestion.style.color = "red";
                                    }
                                i ++;
                                    //kollar så att man har gått igenom hela arrayen och stannar intervallen.
                                if(i == array.length){
                                    memorering.memoreringIsClicked = 0;//gör så att det går att trycka på start igen.
                                    btn.style.display = "inline";
                                    if(!this.buttonIsCreated){
                                        
                                        this.buttonIsCreated = true;
                                    }
                                    
                                    elQuestion.innerText = "Skriv in nummrena i ordning";
                                    
                                    clearInterval(myInterval);
                                }
                                if(level !== "memorering"){
                                    clearInterval(myInterval);
                                    } 
                    
                                }
                            }else {
                                clearInterval(myInterval);
                                memorering.memoreringIsClicked = 0;
                            }
                            
                        }, 1000);
                
            
        }


        
        
     },
    //skriver ut facit.
    btnIsClicked: 0,
    getFacit: function(array){
        
        let elGetFacit = document.getElementById("getFacit");
        
        if(memorering.btnIsClicked === 0){
            memorering.btnIsClicked++;
            
            for(i = 0 ; i < array.length ; i++){
                elGetFacit.innerHTML += array[i] + " ";
                
            }
        } else if(memorering.btnIsClicked === 1){
            
            elGetFacit.innerHTML = "";
            memorering.btnIsClicked = 0;
        }
    },
    
    getAnswer: function(array){
        
        let antalRätt = 0;
        let rättPlatsIArray = 0;
        elSvar = document.getElementById("svar");
        this.yourAnswer.push(Number(elSvar.value));
        elSvar.value = "";
        if(this.yourAnswer.length === this.myArray.length){
            for(i = 0 ; i < this.myArray.length ; i++){
                if(this.myArray.includes(this.yourAnswer[i])){
                    console.log("du kom in...");
                    antalRätt++;
                }
                document.getElementById("msg").innerHTML = " Du hade " + antalRätt + " av " + this.myArray.length + ".<br>"
                console.log("antalRätt: " + antalRätt);
            }
            if(true){
                for(i = 0 ; this.myArray.length >= i + 1; i++){
                    if(this.myArray[i] == this.yourAnswer[i]){
                        rättPlatsIArray++;
                        console.log(this.yourAnswer[i]);
                    }
                    if(rättPlatsIArray == this.myArray.length){
                        document.getElementById("msg").innerText += "Alla dina nummer skrevs in i rätt ording. ";
                        console.log("rättPlattsIArray: " + rättPlatsIArray);
                    }
                }
                this.yourAnswer = [];
            }if(rättPlatsIArray !== this.myArray.length){
                document.getElementById("msg").innerText += "Siffrorna skrevs in i fel ording. ";
                
            }
            
        }
        
    } 
}


