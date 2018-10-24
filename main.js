let figurKoder = ['Mask', 'Näsa', 'Hår', 'Bulle', 'Val', 'Räv', 'yXa', 'Dörr', 'Lök', 'Cykel', 'aNeMon', 'aNaNas', 'NöT', 'NuBbe', 'aNKare', 'NaRrmössa', 'NyPon', 'NyStan', 'NaGel', 'NyCkel', 'HuMla', 'HaNd', 'HaTt', 'TaBlett', 'TV', 'HaRe', 'TuPp', 'HyDda', 'HaLm', 'TaCo', 'BoM', 'BeN', 'BåT', 'BeBis', 'BoK', 'BåR', 'BoJ', 'BaDkar', 'BiL', 'BoCk', 'KiMono', 'KaNtarell', 'VaTtenmelon', 'KaBel', 'KiWi', 'KRita', 'KeX', 'VaS', 'VåG', 'KoCkmössa', 'RoM', 'RuNsten', 'FoT', 'RaBarber', 'Raket', 'FåR', 'RiPa', 'RaDio', 'FiLm-rulle', 'RaCket', 'PuMa', 'JeaNs', 'PiZza', 'JoBbarhjälm', 'JuKebox', 'JoRdglob', 'PaPaya', 'PiStol', 'PaLm', 'JuiCepaket', 'DoMino', 'DiNosaurie', 'SHorts', 'DuBb-däck', 'DyKare', 'DRake', 'SPindel', 'DoSa', 'SåG', 'SäCk', 'GeM', 'LöNnlöv', 'LaTte', 'eLBas', 'oLiV', 'GaRdin', 'LeoPardmjukisdjur', 'GåS', 'GaLge', 'LoCktång', 'CyMbal', 'CoNtainer', 'CiTronskiva', 'CaBriolet', 'CyKlopöga', 'CeRat', 'CaPotasto', 'CD-skiva', 'CyLinder', 'CoCktail'];
let level = "one";
let points = 0;
let dittSvar = 1;
let rättSvar = 0;
let elQuestion = document.getElementById("question");
elFocus = document.getElementById("svar");

question.getQuestion();





window.addEventListener('keyup', function(e) {

    if (e.keyCode === 13) {
        facit.getPoints();
        question.getQuestion();

    }

});