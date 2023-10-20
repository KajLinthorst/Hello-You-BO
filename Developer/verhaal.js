var readline = require('readline-sync')
/*

    Keuzeverhaal

*/

let hp, attack, dialogue1, dialogue2, dialogue3, dialogue4;
hp = 30;
attack = 5;
dialogue1 = ""
dialogue2 = ""
dialogue3 = ""
dialogue4 = ""
function addSpaces(txt, len){
    let output = txt.toString();
    while (output.length < len){
        output += " ";
    }
    return output;
}

function drawInterface(){
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
    console.log(" _____________    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   ____________________ ");
    console.log(" |  {STATS}  |    X                                                                            X   |    [COMMANDS]    | ");
    console.log(" | HP: " + addSpaces(hp,6) +"|    X                                                                            X   |                  | ");
    console.log(" | ATK: " + addSpaces(attack,5 ) +"|    X                                                                            X   |                  | ");
    console.log(" |___________|    X                                                                            X   | <attack>         | ");
    console.log("                  X                                                                            X   |                  | ");
    console.log("                  X                                                                            X   | <block>          | ");
    console.log(" ______________   X                                                                            X   |                  | ");
    console.log(" |  {BUFFS}   |   X                                                                            X   | <heal>           | ");
    console.log(" |            |   X                                                                            X   |                  | ");
    console.log(" |  ATK+      |   X                                                                            X   | <run>            | ");
    console.log(" |            |   X                                                                            X   |                  | ");
    console.log(" |  DEF+      |   X                                                                            X   |                  | ");
    console.log(" |            |   X                                                                            X   |                  | ");
    console.log(" |            |   X                                                                            X   |                  | ");
    console.log(" |            |   X                                                                            X   |                  | ");
    console.log(" |____________|   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   |__________________| ");

}


function stuk0(dialogue1, dialogue2, dialogue3, dialogue4){
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Jij bent een dappere avonturier die tijdens een van zijn zoektochten naar een schat," ,115) + "| ");
    console.log(" | " + addSpaces("in een val beland is van de Skeletten, de Skeletten zijn duivelse monsters",115) + "| ");
    console.log(" | " + addSpaces("Die al eeuwen lang in de schaduw hebben geleefd. Je wordt wakker in een donkere kerker met een laag aantal HP",115) + "| ");
    console.log(" | " + addSpaces("En met niks tot je naam. Je zult deze kerker moeten verkennen om wapens en middelen te vinden om te ontsnappen.",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");


}

function stuk1(dialogue1, dialogue2, dialogue3, dialogue4){
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je wordt wakker en kijkt om je heen. Je hebt een enorme pijn en je ziet bijna geen hand voor ogen. " ,115) + "| ");
    console.log(" | " + addSpaces("Links van je zie je een lockpick waarmee je de gevangenis deur open zou kunnen breken. ",115) + "| ");
    console.log(" | " + addSpaces("Rechts van je zie je een nauw kruip gat met een klein beetje ligt eruit schijnen. ",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk1 = ['De deur lockpicken', 'Door het gat heen kruipen',],
    indexstuk1 = readline.keyInSelect(answerstuk1, 'Wat kies je?');
    console.log(indexstuk1)
    if (indexstuk1 == 0) {
        stuk2()        
    } else if (indexstuk1 == 1){
        stuk3()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");


}
function stuk2(dialogue1, dialogue2, dialogue3, dialogue4){
    drawInterface()
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je breekt de gevangenis deur open en loopt de gang in. Je bevindt je nu in een lange gang. " ,115) + "| ");
    console.log(" | " + addSpaces("Links van je zie je een licht maar je hoort ook stemmen.",115) + "| ");
    console.log(" | " + addSpaces("Rechts van je zie je dat de gang waarbij er een bocht naar links gaat.",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk2 = ['Links afgaan.', 'Rechts afgaan',],
    indexstuk2 = readline.keyInSelect(answerstuk2, 'Wat kies je?');
    if (indexstuk2 == 0) {
        stuk4()        
    } else if (indexstuk2 == 1){
        stuk5()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
    

}
function stuk3(dialogue1, dialogue2, dialogue3, dialogue4){
    drawInterface()
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je kruipt door het gat een en beland in een opslag ruimte. Aan de muur hangt een zwaard die je gelijk pakt." ,115) + "| ");
    console.log(" | " + addSpaces("Je besluit verder te zoeken door de spullen heen en vindt 3 stukken eten. ",115) + "| ");
    console.log(" | " + addSpaces("Terwijl je bezig ben met zoeken stoot je per ongeluk een doos om. Een Skelet hoort het en komt jou kant op. ",115) + "| ");
    console.log(" | " + addSpaces("Je moet kiezen tussen het gevecht aan te gaan of je ergens te verstoppen",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk3 = ['Verstoppen', 'Het gevecht aangaan',],
    indexstuk3 = readline.keyInSelect(answerstuk3, 'Wat kies je?');
    if (indexstuk3 == 0) {
        stuk6()        
    } else if (indexstuk3 == 1){
        stuk7()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
    

}
function stuk4(dialogue1, dialogue2, dialogue3, dialogue4){
    
    drawInterface()
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je loopt richting de stemmen en komt erachter dat het een kamer is met een aantal Skeletten die pauze lijken te houden,",115) + "| ");
    console.log(" | " + addSpaces("je besluit de kamer te betreden en om ze heen te sluipen. Op de tafel zie je een ijzer borstharnas liggen. ",115) + "| ");
    console.log(" | " + addSpaces("Je doet het ijzeren harnas aan en sluipt verder de kamer uit. ",115) + "| ");
    console.log(" | " + addSpaces("Je moet kiezen tussen het gevecht aan te gaan of je ergens te verstoppen",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk4 = ['Teruglopen en vechten', 'Doorlopen',],
    indexstuk4 = readline.keyInSelect(answerstuk4, 'Wat kies je?');
    if (indexstuk4 == 0) {
        stuk8()        
    } else if (indexstuk4 == 1){
        stuk9()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk5(dialogue1, dialogue2, dialogue3, dialogue4){
  
    drawInterface()
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je loopt rechtsaf en doordat je bijna geen handen kan zien loop je recht in een valkuil",115) + "| ");
    console.log(" | " + addSpaces("XXX Einde 1: Dood door een Val XXX",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
    

}
function stuk6(dialogue1, dialogue2, dialogue3, dialogue4){
    
    drawInterface()
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je verstopt je achter een grote kist. Het Skelet is met zijn rug naar je toegekeerd, je merkt op dat de Skelet een sleutel bij zich heeft.",115) + "| ");
    console.log(" | " + addSpaces("De sleutel staat Kamer 2 geschreven, je pakt de sleutel en wacht tot de skelet de kamer uitloopt en je loopt vervolgens de opslag kamer uit.",115) + "| ");
    console.log(" | " + addSpaces("Je ziet een grote ijzeren deur met Kamer 2 erop genoteerd. ",115) + "| ");
    console.log(" | " + addSpaces("Tegenover de ijzeren deur is een lange gang.",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk6 = ['De ijzeren deur openmaken', 'Doorlopen',],
    indexstuk6 = readline.keyInSelect(answerstuk6, 'Wat kies je?');
    if (indexstuk6 == 0) {
        stuk10()        
    } else if (indexstuk6 == 1){
        stuk11()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk7(dialogue1, dialogue2, dialogue3, dialogue4){
  
    drawInterface()
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je gaat het gevecht aan met het Skelet. Als je het Skelet verslagen hebt verandert het Skelet en zijn spullen in een hoopje as.",115) + "| ");
    console.log(" | " + addSpaces("Je ziet een grote ijzeren deur met Kamer 2 erop genoteerd met een sleutel gat.",115) + "| ");
    console.log(" | " + addSpaces("Tegenover de ijzeren deur is een lange gang je loopt deze gang door en beland in een gang vol met gevangenis cellen. ",115) + "| ");
    console.log(" | " + addSpaces("Er zitten gevangen in de cellen. Opeens hoor je een zacht gezucht links uit een cel komen. Een man smeekt je om hulp.",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk7 = ['Helpen', 'Doorlopen',],
    indexstuk7 = readline.keyInSelect(answerstuk7, 'Wat kies je?');
    if (indexstuk7 == 0) {
        stuk12()        
    } else if (indexstuk7 == 1){
        stuk13()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk8(dialogue1, dialogue2, dialogue3, dialogue4){
   
    drawInterface()
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je loopt terug en bevecht de Skeletten. Als je ze verslagen heb zie je op de tafel een kist met 2 sleutels liggen.",115) + "| ");
    console.log(" | " + addSpaces("Je ziet een grote ijzeren deur met Kamer 2 erop genoteerd met een sleutel gat.",115) + "| ");
    console.log(" | " + addSpaces("Op een van de sleutel staat Kamer 4 genoteerd en op de andere sleutel Kamer 5.",115) + "| ");
    console.log(" | " + addSpaces("Je ziet een grote ijzeren deur in de kamer met daarop Kamer 4 genoteerd. Je gebruikt de sleutel en beland in een kamer met een gewond skelet op de grond.",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk8 = ['Helpen', 'Doodmaken',],
    indexstuk8 = readline.keyInSelect(answerstuk8, 'Wat kies je?');
    if (indexstuk8 == 0) {
        stuk14()        
    } else if (indexstuk8 == 1){
        stuk15()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk9(dialogue1, dialogue2, dialogue3, dialogue4){
   
    drawInterface()
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je loopt door en ziet een grote trap naar boven. ",115) + "| ");
    console.log(" | " + addSpaces("Je loopt de trap op maar onderweg kom je een Skelet tegen met een sterk pantser. ",115) + "| ");
    console.log(" | " + addSpaces("Nadat je het Skelet vermoord en in een hoopje as veranderd,",115) + "| ");
    console.log(" | " + addSpaces("loop je verder en belandt je in een lange kamer met 4 uitgangen. ",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk9 = ['Gang 1', 'Gang 2','Gang 3','Gang 4'],
    indexstuk9 = readline.keyInSelect(answerstuk9, 'Wat kies je?');
    if (indexstuk9 == 0) {
        stuk16()        
    } else if (indexstuk9 == 1){
        stuk17()
    } else if (indexstuk9 == 2){
        stuk18()
    }
    else if (indexstuk9 == 3){
        stuk19()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk10(dialogue1, dialogue2, dialogue3, dialogue4){
   
    drawInterface()
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je maakt de ijzeren deur open en bevindt je in een goed verlichte kamer wat op een lounge plek lijkt. Je ziet op het plafond een luik.",115) + "| ");
    console.log(" | " + addSpaces("Je ziet een grote ijzeren deur met Kamer 2 erop genoteerd met een sleutel gat.",115) + "| ");
    console.log(" | " + addSpaces("Zonder enige keuze besluit je het gevecht aan te gaan. Zodra je gewonnen heb ren je snel de troon kamer uit,",115) + "| ");
    console.log(" | " + addSpaces("en belandt je in een hal vol met wapens en pantsers. Je hoort ook een groep Skeletten jou kant op komen.",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk10 = ['De kamer looten en het gevecht aangaan', 'Wegrennen',],
    indexstuk10 = readline.keyInSelect(answerstuk10, 'Wat kies je?');
    if (indexstuk10 == 0) {
        stuk20()        
    } else if (indexstuk10 == 1){
        stuk21()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
drawInterface()
stuk1()

let answer = readline.question("");
