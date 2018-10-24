let memorering = {
    myArray: [],
    //skapar en array med random nummer i par 1-100.
    getArray: function(){
        let array = [];
        for(i = 0 ; i < 20 ; i++){
            array.push(Math.round(Math.random()*100));
            
            
        }
        this.myArray = array;
        return array;
    },
    //skriver ut alla nummer i en intervall och skapar facit knappen 
    getMemoryNumeber: function(array) {
        let myArray = array;
        let elQuestion = document.getElementById("question");
        let i = 0;
        let myInterval = setInterval(function(){
            elQuestion.innerText = array[i];
            i ++;
            if(i == array.length){

                let btn = document.createElement("button");
                btn.setAttribute("class","meny");
                btn.setAttribute("onclick", "memorering.getFacit(memorering.myArray)");
                btn.setAttribute("id", "btn");
                btn.innerText = "facit";
                
                document.getElementById("facit").appendChild(btn);

                elQuestion.innerText = "Skriv in nummrena i ordning";
                clearInterval(myInterval);
            }
        }, 60);
        
    },
    //skriver ut facit och sätter knappens onclick attribut till ingenting.
    getFacit: function(array){

        let elGetFacit = document.getElementById("getFacit");
        document.getElementById("btn").setAttribute("onclick", ""); 
        for(i = 0 ; i < array.length ; i++){
            elGetFacit.innerHTML += array[i] + " ";
            
        }
    }
}