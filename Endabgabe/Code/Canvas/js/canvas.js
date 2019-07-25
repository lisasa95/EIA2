/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var endabgabe;
(function (endabgabe) {
    document.addEventListener("DOMContentLoaded", init);
    endabgabe.bewegteUnterwasserweltArray = [];
    endabgabe.Punktestand = 0;
    let spielerfisch;
    let fps = 25;
    let imageData;
    function init() {
        endabgabe.canvas = document.getElementsByTagName("canvas")[0];
        endabgabe.crc = endabgabe.canvas.getContext("2d");
        endabgabe.insert();
        endabgabe.refresh();
        zeichneHintergrund();
        imageData = endabgabe.crc.getImageData(0, 0, endabgabe.canvas.width, endabgabe.canvas.height);
        spielerfisch = new endabgabe.SpielerFisch();
        spielerfisch.draw();
        document.addEventListener("keydown", moveSpielerFisch);
        //Grüner Fisch
        for (let i = 0; i <= 7; i++) {
            let gruen;
            gruen = new endabgabe.GruenerFisch();
            endabgabe.bewegteUnterwasserweltArray.push(gruen);
            gruen.draw();
        }
        //Lila Fisch
        for (let i = 0; i <= 7; i++) {
            let lila;
            lila = new endabgabe.LilaFisch();
            endabgabe.bewegteUnterwasserweltArray.push(lila);
            lila.draw();
        }
        //Große Luftblasen
        for (let i = 0; i <= 10; i++) {
            let gross;
            gross = new endabgabe.BlaseGross();
            endabgabe.bewegteUnterwasserweltArray.push(gross);
            gross.draw();
        }
        //Kleine Blase
        for (let i = 0; i <= 20; i++) {
            let klein;
            klein = new endabgabe.BlaseKlein();
            endabgabe.bewegteUnterwasserweltArray.push(klein);
            klein.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        endabgabe.crc.clearRect(0, 0, endabgabe.canvas.width, endabgabe.canvas.height);
        endabgabe.crc.putImageData(imageData, 0, 0);
        spielerfisch.update();
        for (let i = 0; i < endabgabe.bewegteUnterwasserweltArray.length; i++) {
            endabgabe.bewegteUnterwasserweltArray[i].update();
            if (spielerfisch.kollision(endabgabe.bewegteUnterwasserweltArray[i]) == true) {
                endabgabe.bewegteUnterwasserweltArray.splice(i, 1);
            }
        }
        if (endabgabe.bewegteUnterwasserweltArray.length == 0) {
            endabgabe.bewegteUnterwasserweltArray.splice(0, endabgabe.bewegteUnterwasserweltArray.length);
            document.getElementById("gameOver").style.display = "block";
            console.log("Insert Hier MeinFish!");
            endabgabe.Spielername = prompt("Your score: " + endabgabe.Punktestand, "Your Name");
            endabgabe.insert();
            endabgabe.refresh();
        }
        console.log("Du hast gewonnen!");
    }
    endabgabe.crc.fillStyle = "#8021a6";
    endabgabe.crc.font = "20px Arial";
    endabgabe.crc.fillText("Punktestand: " + endabgabe.Punktestand.toString(), 850, 30);
    function zeichneHintergrund() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 1000, 700);
        endabgabe.crc.fillStyle = "#86A8E7";
        endabgabe.crc.fill(wasser);
        let boden = new Path2D();
        boden.rect(0, 600, 1000, 100);
        endabgabe.crc.fillStyle = "#CDBA96";
        endabgabe.crc.fill(boden);
        let stein = new Path2D();
        stein.moveTo(620, 620);
        stein.quadraticCurveTo(100, 300, 50, 620);
        stein.closePath();
        endabgabe.crc.fillStyle = "#c2c2d6";
        endabgabe.crc.fill(stein);
        endabgabe.crc.strokeStyle = "#5c5c8a";
        endabgabe.crc.stroke(stein);
        let pflanze1 = new Path2D();
        pflanze1.moveTo(800, 630);
        pflanze1.lineTo(780, 630);
        pflanze1.lineTo(800, 400);
        pflanze1.closePath();
        endabgabe.crc.fillStyle = "#5cd65c";
        endabgabe.crc.fill(pflanze1);
        endabgabe.crc.strokeStyle = "green";
        endabgabe.crc.stroke(pflanze1);
        let pflanze2 = new Path2D();
        pflanze2.moveTo(700, 630);
        pflanze2.lineTo(720, 630);
        pflanze2.lineTo(800, 200);
        pflanze2.closePath();
        endabgabe.crc.fillStyle = "#5cd65c";
        endabgabe.crc.fill(pflanze2);
        endabgabe.crc.strokeStyle = "green";
        endabgabe.crc.stroke(pflanze2);
        let pflanze3 = new Path2D();
        pflanze3.moveTo(800, 630);
        pflanze3.lineTo(820, 630);
        pflanze3.lineTo(600, 100);
        pflanze3.closePath();
        endabgabe.crc.fillStyle = "#5cd65c";
        endabgabe.crc.fill(pflanze3);
        endabgabe.crc.strokeStyle = "green";
        endabgabe.crc.stroke(pflanze3);
        let pflanze4 = new Path2D();
        pflanze4.moveTo(600, 630);
        pflanze4.lineTo(620, 630);
        pflanze4.lineTo(700, 100);
        pflanze4.closePath();
        endabgabe.crc.fillStyle = "#00cc99";
        endabgabe.crc.fill(pflanze4);
        endabgabe.crc.strokeStyle = "green";
        endabgabe.crc.stroke(pflanze4);
        let pflanze5 = new Path2D();
        pflanze5.moveTo(300, 630);
        pflanze5.lineTo(320, 630);
        pflanze5.lineTo(200, 100);
        pflanze5.closePath();
        endabgabe.crc.fillStyle = "#00cc99";
        endabgabe.crc.fill(pflanze5);
        endabgabe.crc.strokeStyle = "green";
        endabgabe.crc.stroke(pflanze5);
        let pflanze6 = new Path2D();
        pflanze6.moveTo(400, 630);
        pflanze6.lineTo(420, 630);
        pflanze6.lineTo(400, 100);
        pflanze6.closePath();
        endabgabe.crc.fillStyle = "#00cc99";
        endabgabe.crc.fill(pflanze6);
        endabgabe.crc.strokeStyle = "green";
        endabgabe.crc.stroke(pflanze6);
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
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=canvas.js.map