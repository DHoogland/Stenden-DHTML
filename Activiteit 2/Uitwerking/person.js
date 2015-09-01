/*********************************************************************
*                                                                    *
*  Project   : Module DHTML                                          *
*  File      : person.js  (stripped versie)                          *
*  Browser   :                                                       *
*  Auteur    : Kasper Kombrink, Koos de Wit                          *
*  Datum     : sept 2003                                             *
*  Versie    : 1                                                     *
*                                                                    *
*********************************************************************/

function askInformation()
{
	// this function has to be coded by the student
    var value = prompt("Please enter your name", "Harry Potter");
    document.getElementById("name").innerHTML = "<p><span id='nameheading'>name:&nbsp;</span>"+value+"</p>";

    var value = prompt("Please enter your address", "Van Schaikweg 94");
    document.getElementById("address").innerHTML = "<p><span id='addressheading'>address:&nbsp;</span>"+value+"</p>";

    var value = prompt("Please enter your city", "Emmen");
    document.getElementById("city").innerHTML = "<p><span id='cityheading'>city:&nbsp;</span>"+value+"</p>";
}
