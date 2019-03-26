/** FUNKTION UM NAMENEINGABE ZU ÖFFNEN */
function begrüßung() {
    var person = prompt("Bitte füge deinen Namen ein!");
    /** FUNKTION UM ANZUGEBEN WAS PASSIERT WENN DER NAME EINGEGEBEN WIRD, WIE DIE BEGRÜSSUNG DANN LAUTET */
    if (person != null) {
        document.getElementById("begrüßung").innerHTML = "Hey " + person + ". Was geht ab?";
        /** KONSOLENAUSGABE */
        console.log("Hey " + person + ". Was geht ab?");
    }
}
/** FUNKTION DIE BEGRÜSSUNGSFENSTER ZU ÖFFNEN */
function init() {
    begrüßung();
}
document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=main.js.map