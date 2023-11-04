var readline = require('readline-sync')
/*

    Keuzeverhaal

*/

let dialogue1, dialogue2, dialogue3, dialogue4;
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



function stuk0(dialogue1, dialogue2, dialogue3, dialogue4){
    
    console.log("                                                 {- De Donkere Kerker -} ")
    console.log("                                                     Kaj Linthorst")
    console.log("")
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Jij bent een dappere avonturier die tijdens een van zijn zoektochten naar een schat," ,115) + "| ");
    console.log(" | " + addSpaces("in een val beland is van de Skeletten, de Skeletten zijn duivelse monsters",115) + "| ");
    console.log(" | " + addSpaces("Die al eeuwen lang in de schaduw hebben geleefd. Je wordt wakker in een donkere kerker met weinig kracht,",115) + "| ");
    console.log(" | " + addSpaces("En met niks tot je naam. Je zult deze kerker moeten verkennen om wapens en middelen te vinden om te ontsnappen.",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
       answerstuk0 = ['Start'],
    indexstuk0 = readline.keyInSelect(answerstuk0, '');
   
    if (indexstuk0 == 0) {
        stuk1()        
    }

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
    
    if (indexstuk1 == 0) {
        stuk2()        
    } else if (indexstuk1 == 1){
        stuk3()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");

}
function stuk2(dialogue1, dialogue2, dialogue3, dialogue4){
    
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
    } else if (indexstuk2 == 1) {
        stuk5()
    }
            
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
}
function stuk3(dialogue1, dialogue2, dialogue3, dialogue4){
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je kruipt door het gat een en beland in een opslag ruimte. " ,115) + "| ");
    console.log(" | " + addSpaces("Aan de muur hangt een zwaard die je gelijk pakt.",115) + "| ");
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
    
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je loopt richting de stemmen en komt erachter dat het een kamer is,",115) + "| ");
    console.log(" | " + addSpaces("met een aantal Skeletten die pauze lijken te houden, je besluit de kamer te betreden,",115) + "| ");
    console.log(" | " + addSpaces("en om ze heen te sluipen. Je sluipt verder de kamer uit. ",115) + "| ");
    console.log(" | " + addSpaces("Je twijfelt om terug te lopen om de skeletten uit te schakelen of om verder te lopen",115) + "| ");
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
  
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je loopt rechtsaf en doordat je bijna geen handen kan zien loop je recht in een valkuil",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 1 : DOOD DOOR EEN VAL XXX",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                        o                                                                                ");
    console.log("                      XXXXXXXXXXXXX    /|/          XXXXXXXXXXX                                                          ");
    console.log("                                  X     |           X                                                                    ");

}
function stuk6(dialogue1, dialogue2, dialogue3, dialogue4){
    
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je verstopt je achter een grote kist, je merkt op dat de Skelet een sleutel bij zich heeft.",115) + "| ");
    console.log(" | " + addSpaces("Op de sleutel staat een 2 geschreven, je pakt de sleutel en wacht tot de skelet de kamer uitloopt.",115) + "| ");
    console.log(" | " + addSpaces("Vervolgens sluip je de kamer uit en zie je grote ijzeren deur met 2 erop genoteerd. ",115) + "| ");
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
  
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je gaat het gevecht aan met het Skelet. Als je het Skelet verslagen hebt verandert het Skelet in een hoopje as.",115) + "| ");
    console.log(" | " + addSpaces("Je ziet een grote ijzeren deur met 2 erop genoteerd met een sleutel gat.",115) + "| ");
    console.log(" | " + addSpaces("Tegenover de deur is een lange gang je loopt deze gang door en beland in een gang vol met gevangenis cellen.",115) + "| ");
    console.log(" | " + addSpaces("Opeens hoor je een zacht gezucht links uit een cel komen. Een man smeekt je om hulp.",115) + "| ");
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
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je loopt terug en bevecht de Skeletten. Als je ze verslagen heb zie je op de tafel een kist met 2 sleutels liggen.",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("Op een van de sleutel staat 4 genoteerd en op de andere sleutel Kamer 5.",115) + "| ");
    console.log(" | " + addSpaces("Je ziet een deur met daarop 4 genoteerd. Als je de sleutel gebruik zie je een skelet die gewond op de grond ligt",115) + "| ");
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
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je maakt de ijzeren deur open en bevindt je in een kamer wat op een lounge plek lijkt. Je ziet op het plafond een luik.",115) + "| ");
    console.log(" | " + addSpaces(". Je besluit het luik open te maken. Je belandt in de troon kamer van een van de Skelet leiders.",115) + "| ");
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
function stuk11(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je loopt door en bevindt je in een hal vol met gevangenis cellen. ",115) + "| ");
    console.log(" | " + addSpaces("Je hoort allemaal gepraat en besluit om door te rennen.",115) + "| ");
    console.log(" | " + addSpaces("Terwijl je rent zie je een trap. Je loopt deze trap op en belandt in een valkuil.",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 1 : DOOD DOOR EEN VAL XXX",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                        o                                                                                ");
    console.log("                      XXXXXXXXXXXXX    /|/          XXXXXXXXXXX                                                          ");
    console.log("                                  X     |           X                                                                    ");
}
function stuk12(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je vraagt wat de man moet en de man vraagt of je hem wilt helpen met ontsnappen.",115) + "| ");
    console.log(" | " + addSpaces("Hij vertelt je dat hij een rijke man was en als jij hem helpt dat hij je miljoenen munten zal geven.",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    answerstuk10 = ['Weglopen', 'Helpen',],
    indexstuk10 = readline.keyInSelect(answerstuk10, 'Wat kies je?');
    if (indexstuk10 == 0) {
        stuk22()        
    } else if (indexstuk10 == 1){
        stuk23()
    }
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
   
}
function stuk13(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je loopt door en klimt door en vindt een gat in het plafond,",115) + "| ");
    console.log(" | " + addSpaces("je klimt er doorheen en beland bij de uitgang. Je bent vrij",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 4 : ONTSNAPT XXX",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                           XX      XX                                                                                     ");
    console.log("                           XXXXXXXXXX                                                                                     ");
    console.log("                           X        X                                                                                     ");
    console.log("                           X              o                                                                               ");
    console.log("                           X          =  /|/                                                                              ");
    console.log("                           X          =   ^                                                                               ");
   
}
function stuk14(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Voordat je kan reageren komen opeens tientallen Skeletten tevoorschijn.",115) + "| ");
    console.log(" | " + addSpaces("Het bleek een val te zijn. ",115) + "| ");
    console.log(" | " + addSpaces("Je wordt gevangen genomen en begint weer vanuit de cel.",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 3 : GEPAKT XXX",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                       ______________________                                                            ");
    console.log("                                       |  |  |  |  |  |  |  |                                                            ");
    console.log("                                       |  |  |  |  |  |  |  |                                                            ");
    console.log("                                       |  |  |  |  |  |  |  |                                                            ");      
    console.log("                                       |__|__|__|__|__|__|__|                                                            ");  
   
}
function stuk15(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je steekt het Skelet neer en het veranderd in een hoopje as.",115) + "| ");
    console.log(" | " + addSpaces("Je hoort om je heen stemmen en je besluit het op het rennen te zetten.",115) + "| ");
    console.log(" | " + addSpaces("Je rent door totdat je voor de uitgang komt. Met al je kracht trap je de deur open en ontsnap je.",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 4 : ONTSNAPT XXX",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                           XX      XX                                                                                     ");
    console.log("                           XXXXXXXXXX                                                                                     ");
    console.log("                           X        X                                                                                     ");
    console.log("                           X              o                                                                               ");
    console.log("                           X          =  /|/                                                                              ");
    console.log("                           X          =   ^                                                                               ");
}
function stuk16(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je loopt Gang 1 binnen en de deur sluit achter je. Je ziet een groep Skeletten die je meteen uit schakelt.",115) + "| ");
    console.log(" | " + addSpaces("Zodra je ze verslagen heb valt het je op dat er een raam in de kamer is.",115) + "| ");
    console.log(" | " + addSpaces("Je slaat deze in en je ontsnapt. Je bent vrij",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 4 : ONTSNAPT XXX",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                           XX      XX                                                                                     ");
    console.log("                           XXXXXXXXXX                                                                                     ");
    console.log("                           X        X                                                                                     ");
    console.log("                           X              o                                                                               ");
    console.log("                           X          =  /|/                                                                              ");
    console.log("                           X          =   ^                                                                               ");
}
function stuk17(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je loopt Gang 2 binnen en de deur sluit achter je.",115) + "| ");
    console.log(" | " + addSpaces("Je ziet een kamer vol met vallen en gevaar, aan het einde is de uitgang van de gevangenis.",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");


    let randomizedNumber = Math.floor(Math.random() * 5) + 1;

    if (randomizedNumber = 1) {
        
        console.log(" ______________________________________________________________________________________________________________________ ");
        console.log(" | " + addSpaces("Je struikelt en valt recht in een val",115) + "| ");
        console.log(" | " + addSpaces("Je bent dood.",115) + "| ");
        console.log(" | " + addSpaces("",115) + "| ");
        console.log(" | " + addSpaces("XXX EINDE : 1 DOOD DOOR EEN VAL XXX",115) + "| ");
        console.log(" |____________________________________________________________________________________________________________________| ");
        console.log("                                                                                                                        ");
        console.log("                                        o                                                                                ");
        console.log("                      XXXXXXXXXXXXX    /|/          XXXXXXXXXXX                                                          ");
        console.log("                                  X     |           X                                                                    ");
    } else {
        
        console.log(" ______________________________________________________________________________________________________________________ ");
        console.log(" | " + addSpaces("Je rent heel hard door en je red net aan het einde! Je bent vrij",115) + "| ");
        console.log(" | " + addSpaces("",115) + "| ");
        console.log(" | " + addSpaces("",115) + "| ");
        console.log(" | " + addSpaces("XXX EINDE : 4 ONTSNAPT XXX",115) + "| ");
        console.log(" |____________________________________________________________________________________________________________________| ");
        console.log("                           XX      XX                                                                                     ");
        console.log("                           XXXXXXXXXX                                                                                     ");
        console.log("                           X        X                                                                                     ");
        console.log("                           X              o                                                                               ");
        console.log("                           X          =  /|/                                                                              ");
        console.log("                           X          =   ^                                                                               ");


}
}
function stuk18(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je loopt Gang 3 binnen en de deur sluit achter je. Je ziet een man bij een deur zitten.",115) + "| ");
    console.log(" | " + addSpaces("Hij vertelt je dat hij je vrij zal laten als jij zijn spel kan winnen,",115) + "| ");
    console.log(" | " + addSpaces("als je verliest zal hij de beveiliging roepen, en zal je weer in je cel gegooid worden. ",115) + "| ");
    console.log(" | " + addSpaces("Het spel van de man is Raad het Getal. Als jij 1 getal die zich binnen de 10 bevindt ben je vrij.",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");


    let guessNumber = Math.floor(Math.random() * 9) + 2;
    
    let guessedNumber = readline.question("Raad het getal tussen de 1 en 10 : ");

    if (guessNumber == guessedNumber) {
        
        console.log(" ______________________________________________________________________________________________________________________ ");
        console.log(" | " + addSpaces("De man knikt tevreden en hij vertelt dat je het goede nummer heb geraden!",115) + "| ");
        console.log(" | " + addSpaces("De man doet de deur open en je bent vrij.",115) + "| ");
        console.log(" | " + addSpaces("",115) + "| ");
        console.log(" | " + addSpaces("XXX EINDE : 4 ONTSNAPT XXX",115) + "| ");
        console.log(" |____________________________________________________________________________________________________________________| ");
        console.log("                           XX      XX                                                                                     ");
        console.log("                           XXXXXXXXXX                                                                                     ");
        console.log("                           X        X                                                                                     ");
        console.log("                           X              o                                                                               ");
        console.log("                           X          =  /|/                                                                              ");
        console.log("                           X          =   ^                                                                               ");
    } else {
        
        console.log(" ______________________________________________________________________________________________________________________ ");
        console.log(" | " + addSpaces("De man lacht en schud zijn hoofd, fout.",115) + "| ");
        console.log(" | " + addSpaces("De man drukt op een belletje en een groep Skeletten komt je ophalen en gooid je terug in je cel",115) + "| ");
        console.log(" | " + addSpaces("",115) + "| ");
        console.log(" | " + addSpaces("XXX EINDE : 3 GEPAKT XXX",115) + "| ");
        console.log(" |____________________________________________________________________________________________________________________| ");
        console.log("                                       ______________________                                                            ");
        console.log("                                       |  |  |  |  |  |  |  |                                                            ");
        console.log("                                       |  |  |  |  |  |  |  |                                                            ");
        console.log("                                       |  |  |  |  |  |  |  |                                                            ");      
        console.log("                                       |__|__|__|__|__|__|__|                                                            ");
    }


}
function stuk19(dialogue1, dialogue2, dialogue3, dialogue4){
   
   
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je loopt Gang 4 binnen en de deur sluit achter je. Je beland in de pauze kamer van de beveiliging. ",115) + "| ");
    console.log(" | " + addSpaces("Je wordt gearresteerd en begint opnieuw",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 3 : GEPAKT XXX",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                       ______________________                                                            ");
    console.log("                                       |  |  |  |  |  |  |  |                                                            ");
    console.log("                                       |  |  |  |  |  |  |  |                                                            ");
    console.log("                                       |  |  |  |  |  |  |  |                                                            ");      
    console.log("                                       |__|__|__|__|__|__|__|                                                            ");                                                                                                                      
   
}
function stuk20(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je probeert de Skeletten te verslappen maar het zijn er teveel en je sterft aan een steek van een Zwaard",115) + "| ");
    console.log(" | " + addSpaces(" ",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 6 : DOOD IN GEVECHT XXX",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                  XXXXXXX                                                                                 ");
    console.log("                                 X r.i.p X                                                                                ");
    console.log("                                 X       X                                                                                ");
    console.log("                                 X       X                                                                                ");
}
function stuk21(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Je probeert weg te rennen maar je zit vast en je sterft aan een steek van een Zwaard",115) + "| ");
    console.log(" | " + addSpaces(" ",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 6 : DOOD IN GEVECHT XXX",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                  XXXXXXX                                                                                 ");
    console.log("                                 X r.i.p X                                                                                ");
    console.log("                                 X       X                                                                                ");
    console.log("                                 X       X                                                                                ");
}
function stuk22(dialogue1, dialogue2, dialogue3, dialogue4){
   
    

    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Terwijl je je rug keert wordt je in je rug gestoken door de man en sterf je aan zijn handen.",115) + "| ");
    console.log(" | " + addSpaces(" ",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 5 : VERRAAD XXX",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                    o       o                                                                           ");
    console.log("                                   /|/   <--|/                                                                          ");
    console.log("                                    ^       ^                                                                           ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
}
function stuk23(dialogue1, dialogue2, dialogue3, dialogue4){
   
    
    console.log(" ______________________________________________________________________________________________________________________ ");
    console.log(" | " + addSpaces("Terwijl je je rug keert wordt je in je rug gestoken door de man en sterf je aan zijn handen.",115) + "| ");
    console.log(" | " + addSpaces(" ",115) + "| ");
    console.log(" | " + addSpaces("",115) + "| ");
    console.log(" | " + addSpaces("XXX EINDE 5 : VERRAAD XXX",115) + "| ");
    console.log(" |____________________________________________________________________________________________________________________| ");
    console.log("                                                                                                                        ");
    console.log("                                    o       o                                                                           ");
    console.log("                                   /|/   <--|/                                                                          ");
    console.log("                                    ^       ^                                                                           ");
    console.log("                                                                                                                        ");
    console.log("                                                                                                                        ");
}   

stuk0()


