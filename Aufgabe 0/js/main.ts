function klickmichan():void {
    var person=prompt ("Bitte füge deinen Namen ein!");

if (person!=null) {
    document.getElementById("Meldung").innerHTML= "Hey " + person + ". Was geht ab?";
}
}
