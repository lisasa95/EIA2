/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var abschlussaufgabe;
(function (abschlussaufgabe) {
    document.addEventListener("DOMContentLoaded", init);
    abschlussaufgabe.bewegteUnterwasserweltArray = [];
    abschlussaufgabe.Punktestand = 0;
    abschlussaufgabe.alleFischeGefressen = true;
    let spielerfisch;
    let fps = 25;
    let imageData;
    function init() {
        abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        abschlussaufgabe.crc = abschlussaufgabe.canvas.getContext("2d");
        abschlussaufgabe.refresh();
        zeichneHintergrund();
        imageData = abschlussaufgabe.crc.getImageData(0, 0, abschlussaufgabe.canvas.width, abschlussaufgabe.canvas.height);
        spielerfisch = new abschlussaufgabe.SpielerFisch();
        spielerfisch.draw();
        document.addEventListener("keydown", moveSpielerFisch);
        //Grüner Fisch
        for (let i = 0; i <= 7; i++) {
            let gruen;
            gruen = new abschlussaufgabe.GruenerFisch();
            abschlussaufgabe.bewegteUnterwasserweltArray.push(gruen);
            gruen.draw();
        }
        //Lila Fisch
        for (let i = 0; i <= 7; i++) {
            let lila;
            lila = new abschlussaufgabe.LilaFisch();
            abschlussaufgabe.bewegteUnterwasserweltArray.push(lila);
            lila.draw();
        }
        //Große Luftblasen
        for (let i = 0; i <= 10; i++) {
            let gross;
            gross = new abschlussaufgabe.BlaseGross();
            abschlussaufgabe.bewegteUnterwasserweltArray.push(gross);
            gross.draw();
        }
        // Kleine Blase
        for (let i = 0; i <= 20; i++) {
            let klein;
            klein = new abschlussaufgabe.BlaseKlein();
            abschlussaufgabe.bewegteUnterwasserweltArray.push(klein);
            klein.draw();
        }
        update();
    }
    function update() {
        abschlussaufgabe.timer = window.setTimeout(update, 1000 / fps);
        abschlussaufgabe.crc.clearRect(0, 0, abschlussaufgabe.canvas.width, abschlussaufgabe.canvas.height);
        abschlussaufgabe.crc.putImageData(imageData, 0, 0);
        spielerfisch.update();
        for (let i = 0; i < abschlussaufgabe.bewegteUnterwasserweltArray.length; i++) {
            abschlussaufgabe.bewegteUnterwasserweltArray[i].update();
            if (spielerfisch.kollision(abschlussaufgabe.bewegteUnterwasserweltArray[i]) == "essen") {
                abschlussaufgabe.bewegteUnterwasserweltArray.splice(i, 1);
            }
            else if (spielerfisch.kollision(abschlussaufgabe.bewegteUnterwasserweltArray[i]) == "tot") {
                window.clearTimeout(abschlussaufgabe.timer);
                alert("Du bist gestorben!");
                abschlussaufgabe.Spielername = prompt("Erreichte Punktzahl: " + abschlussaufgabe.Punktestand, "Bitte Name eingeben");
                abschlussaufgabe.insert();
                abschlussaufgabe.refresh();
                abschlussaufgabe.alleFischeGefressen = false;
            }
        }
        if (abschlussaufgabe.Punktestand == 80) {
            window.clearTimeout(abschlussaufgabe.timer);
            abschlussaufgabe.Spielername = prompt("Erreichte Punktzahl: " + abschlussaufgabe.Punktestand, "Bitte Name eingeben");
            abschlussaufgabe.insert();
            abschlussaufgabe.refresh();
        }
        abschlussaufgabe.crc.fillStyle = "#8021a6";
        abschlussaufgabe.crc.font = "20px Arial";
        abschlussaufgabe.crc.fillText("Punktestand: " + abschlussaufgabe.Punktestand.toString(), 850, 30);
    }
    function zeichneHintergrund() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 1000, 700);
        abschlussaufgabe.crc.fillStyle = "#86A8E7";
        abschlussaufgabe.crc.fill(wasser);
        let boden = new Path2D();
        boden.rect(0, 600, 1000, 100);
        abschlussaufgabe.crc.fillStyle = "#CDBA96";
        abschlussaufgabe.crc.fill(boden);
        let stein = new Path2D();
        stein.moveTo(620, 620);
        stein.quadraticCurveTo(100, 300, 50, 620);
        stein.closePath();
        abschlussaufgabe.crc.fillStyle = "#c2c2d6";
        abschlussaufgabe.crc.fill(stein);
        abschlussaufgabe.crc.strokeStyle = "#5c5c8a";
        abschlussaufgabe.crc.stroke(stein);
        let pflanze1 = new Path2D();
        pflanze1.moveTo(800, 630);
        pflanze1.lineTo(780, 630);
        pflanze1.lineTo(800, 400);
        pflanze1.closePath();
        abschlussaufgabe.crc.fillStyle = "#5cd65c";
        abschlussaufgabe.crc.fill(pflanze1);
        abschlussaufgabe.crc.strokeStyle = "green";
        abschlussaufgabe.crc.stroke(pflanze1);
        let pflanze2 = new Path2D();
        pflanze2.moveTo(700, 630);
        pflanze2.lineTo(720, 630);
        pflanze2.lineTo(800, 200);
        pflanze2.closePath();
        abschlussaufgabe.crc.fillStyle = "#5cd65c";
        abschlussaufgabe.crc.fill(pflanze2);
        abschlussaufgabe.crc.strokeStyle = "green";
        abschlussaufgabe.crc.stroke(pflanze2);
        let pflanze3 = new Path2D();
        pflanze3.moveTo(800, 630);
        pflanze3.lineTo(820, 630);
        pflanze3.lineTo(600, 100);
        pflanze3.closePath();
        abschlussaufgabe.crc.fillStyle = "#5cd65c";
        abschlussaufgabe.crc.fill(pflanze3);
        abschlussaufgabe.crc.strokeStyle = "green";
        abschlussaufgabe.crc.stroke(pflanze3);
        let pflanze4 = new Path2D();
        pflanze4.moveTo(600, 630);
        pflanze4.lineTo(620, 630);
        pflanze4.lineTo(700, 100);
        pflanze4.closePath();
        abschlussaufgabe.crc.fillStyle = "#00cc99";
        abschlussaufgabe.crc.fill(pflanze4);
        abschlussaufgabe.crc.strokeStyle = "green";
        abschlussaufgabe.crc.stroke(pflanze4);
        let pflanze5 = new Path2D();
        pflanze5.moveTo(300, 630);
        pflanze5.lineTo(320, 630);
        pflanze5.lineTo(200, 100);
        pflanze5.closePath();
        abschlussaufgabe.crc.fillStyle = "#00cc99";
        abschlussaufgabe.crc.fill(pflanze5);
        abschlussaufgabe.crc.strokeStyle = "green";
        abschlussaufgabe.crc.stroke(pflanze5);
        let pflanze6 = new Path2D();
        pflanze6.moveTo(400, 630);
        pflanze6.lineTo(420, 630);
        pflanze6.lineTo(400, 100);
        pflanze6.closePath();
        abschlussaufgabe.crc.fillStyle = "#00cc99";
        abschlussaufgabe.crc.fill(pflanze6);
        abschlussaufgabe.crc.strokeStyle = "green";
        abschlussaufgabe.crc.stroke(pflanze6);
    }
    function moveSpielerFisch(e) {
        if (e.keyCode == 37) { // Linke Pfeiltaste
            spielerfisch.x -= 15;
            spielerfisch.schwimmrichtung = "links";
        }
        else if (e.keyCode == 38) { // Obere Pfeiltaste
            spielerfisch.y -= 15;
        }
        else if (e.keyCode == 39) { // Rechte Pfeiltaste
            spielerfisch.x += 15;
            spielerfisch.schwimmrichtung = "rechts";
        }
        else if (e.keyCode == 40) { // Untere Pfeiltaste
            spielerfisch.y += 15;
        }
    }
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=canvas.js.map