let figurKoder = ['Mask', 'Näsa', 'Hår', 'Bulle', 'Val', 'Räv', 'yXa', 'Dörr', 'Lök', 'Cykel', 'aNeMon', 'aNaNas', 'NöT', 'NuBbe', 'aNKare', 'NaRrmössa', 'NyPon', 'NyStan', 'NaGel', 'NyCkel', 'HuMla', 'HaNd', 'HaTt', 'TaBlett', 'TV', 'HaRe', 'TuPp', 'HyDda', 'HaLm', 'TaCo', 'BoM', 'BeN', 'BåT', 'BeBis', 'BoK', 'BåR', 'BoJ', 'BaDkar', 'BiL', 'BoCk', 'KiMono', 'KaNtarell', 'VaTtenmelon', 'KaBel', 'KiWi', 'KRita', 'KeX', 'VaS', 'VåG', 'KoCkmössa', 'RoM', 'RuNsten', 'FoT', 'RaBarber', 'Raket', 'FåR', 'RiPa', 'RaDio', 'FiLm-rulle', 'RaCket', 'PuMa', 'JeaNs', 'PiZza', 'JoBbarhjälm', 'JuKebox', 'JoRdglob', 'PaPaya', 'PiStol', 'PaLm', 'JuiCepaket', 'DoMino', 'DiNosaurie', 'SHorts', 'DuBb-däck', 'DyKare', 'DRake', 'SPindel', 'DoSa', 'SåG', 'SäCk', 'GeM', 'LöNnlöv', 'LaTte', 'eLBas', 'oLiV', 'GaRdin', 'LeoPardmjukisdjur', 'GåS', 'GaLge', 'LoCktång', 'CyMbal', 'CoNtainer', 'CiTronskiva', 'CaBriolet', 'CyKlopöga', 'CeRat', 'CaPotasto', 'CD-skiva', 'CyLinder', 'CoCktail'];
let level = "one";
let points = 0;
let dittSvar = 1;
let rättSvar = 0;
let elQuestion = document.getElementById("question");
let btn = document.createElement("button");

btn.setAttribute("class","meny");
btn.setAttribute("onclick", "memorering.getFacit(memorering.myArray)");
btn.setAttribute("id", "btn");
btn.innerText = "facit";
document.getElementById("facit").appendChild(btn);
document.getElementById("btn").style.display = "none";
elFocus = document.getElementById("svar");
let elExplination = document.getElementById("explination");
elExplination.addEventListener("click", instruktioner.getExplination);
question.getQuestion();




window.addEventListener('keyup', function(e) {

    if (e.keyCode === 13) {
        if(level !== "memorering"){
            facit.getPoints();
            question.getQuestion();
        }else if(level === "memorering"){
            memorering.getAnswer();
        }

    }

});