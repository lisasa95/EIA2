var endabgabe;
(function (endabgabe) {
    /*Endabgabe/*
    Aufgabe: Endabgabe - CANVAS
    Name: Lisa Sanchez y Bittner
    Matrikel: 260502
    Datum: 28.07.2019
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
    document.addEventListener("DOMContentLoaded", init);
    endabgabe.bewegteUnterwasserweltArray = [];
    let spielerfisch;
    let lilaFischArray = [];
    let gruenerFischArray = [];
    let blaseGrossArray = [];
    let blaseKleinArray = [];
    let fps = 25;
    let imageData;
    function init() {
        endabgabe.canvas = document.getElementsByTagName("canvas")[0];
        endabgabe.crc = endabgabe.canvas.getContext("2d");
        zeichneHintergrund();
        imageData = endabgabe.crc.getImageData(0, 0, endabgabe.canvas.width, endabgabe.canvas.height);
        spielerfisch = new endabgabe.SpielerFisch();
        spielerfisch.draw();
        document.addEventListener("keydown", moveSpielerFisch);
        //Grüner Fisch
        for (let i = 0; i <= 5; i++) {
            let gruen;
            gruen = new endabgabe.GruenerFisch();
            gruenerFischArray.push(gruen);
            gruen.draw();
        }
        //Lila Fisch
        for (let i = 0; i <= 3; i++) {
            let lila;
            lila = new endabgabe.LilaFisch();
            lilaFischArray.push(lila);
            lila.draw();
        }
        //Große Luftblasen
        for (let i = 0; i <= 10; i++) {
            let gross;
            gross = new endabgabe.BlaseGross();
            blaseGrossArray.push(gross);
            gross.draw();
        }
        //Kleine Blase
        for (let i = 0; i <= 20; i++) {
            let klein;
            klein = new endabgabe.BlaseKlein();
            blaseKleinArray.push(klein);
            klein.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        endabgabe.crc.clearRect(0, 0, endabgabe.canvas.width, endabgabe.canvas.height);
        endabgabe.crc.putImageData(imageData, 0, 0);
        spielerfisch.update();
        for (let i = 0; i < gruenerFischArray.length; i++) {
            gruenerFischArray[i].update();
        }
        for (let i = 0; i < lilaFischArray.length; i++) {
            lilaFischArray[i].update();
        }
        for (let i = 0; i < blaseGrossArray.length; i++) {
            blaseGrossArray[i].update();
        }
        for (let i = 0; i < blaseKleinArray.length; i++) {
            blaseKleinArray[i].update();
        }
    }
    function zeichneHintergrund() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 1000, 700);
        endabgabe.crc.fillStyle = "#e6f7ff";
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
        }
        else if (e.keyCode == 38) { // Obere Pfeiltaste
            spielerfisch.y -= 15;
        }
        else if (e.keyCode == 39) { // Rechte Pfeiltaste
            spielerfisch.x += 15;
        }
        else if (e.keyCode == 40) { // Untere Pfeiltaste
            spielerfisch.y += 15;
        }
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=canvas.js.map