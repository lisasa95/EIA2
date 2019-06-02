/* Aufgabe 10:
Aufgabe Nummer 10 - Canvas
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 02.06.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
document.addEventListener("DOMContentLoaded", init);
let crc;
let canvas;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    wasser();
    boden();
    stein(900, 650);
    blasen(500, 500);
    pflanze(100, 600);
    pinkerfisch(300, 400);
    gelberfisch(400, 190);
    aal(400, 300);
    for (let i = 0; i < 20; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        blasen(x, y);
    }
    for (let i = 0; i < 6; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        gelberfisch(x, y);
    }
    for (let i = 0; i < 8; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        pinkerfisch(x, y);
    }
}
function wasser() {
    let wasser = new Path2D();
    wasser.rect(0, 0, 1000, 700);
    crc.fillStyle = "#e6f7ff";
    crc.fill(wasser);
}
function boden() {
    let boden = new Path2D();
    boden.rect(0, 600, 1000, 100);
    crc.fillStyle = "#CDBA96";
    crc.fill(boden);
}
function blasen(_x, _y) {
    let blasen = new Path2D();
    blasen.arc(_x, _y, 20, 0, 2 * Math.PI);
    crc.strokeStyle = "#0033cc";
    crc.fillStyle = "rgb(153, 221, 255)";
    crc.fill(blasen);
    crc.stroke(blasen);
}
function stein(_x, _y) {
    let stein = new Path2D();
    stein.moveTo(620, 620);
    stein.quadraticCurveTo(100, 300, 50, 620);
    stein.closePath();
    crc.fillStyle = "#c2c2d6";
    crc.fill(stein);
    crc.strokeStyle = "#5c5c8a";
    crc.stroke(stein);
}
function pflanzen(_x, _y) {
    let pflanze1 = new Path2D();
    pflanze1.moveTo(650, 800);
    pflanze1.lineTo(300, 800);
}
function pinkerfisch(_x, _y) {
    let fisch1 = new Path2D();
    fisch1.quadraticCurveTo(_x + 70, _y - 70, _x + 30, _y - 10);
    fisch1.lineTo(_x + 150, _y - 40);
    fisch1.quadraticCurveTo(_x + 200, _y + 70, _x + 100, _y + 20);
    fisch1.lineTo(_x + 70, _y - 70);
    fisch1.closePath();
    crc.fillStyle = "#e6b3ff";
    crc.fill(fisch1);
    crc.strokeStyle = "#b30086";
    crc.stroke(fisch1);
    let auge1 = new Path2D();
    auge1.arc(_x + 140, _y + 5, 5, 0, 2 * Math.PI);
    auge1.closePath();
    crc.fillStyle = "white";
    crc.fill(auge1);
    crc.strokeStyle = "black";
    crc.stroke(auge1);
    let iris1 = new Path2D();
    iris1.arc(_x + 140, _y + 5, 2, 0, 2 * Math.PI);
    iris1.closePath();
    crc.fillStyle = "black";
    crc.fill(iris1);
    crc.stroke(iris1);
}
function gelberfisch(_x, _y) {
    let schwanz = new Path2D();
    schwanz.moveTo(_x, _y);
    schwanz.lineTo(_x + 80, _y - 100);
    schwanz.lineTo(_x + 90, _y + 70);
    schwanz.closePath();
    crc.fillStyle = "#fbff21";
    crc.fill(schwanz);
    crc.strokeStyle = "#ffbc21";
    crc.stroke(schwanz);
    let fisch2 = new Path2D();
    fisch2.ellipse(_x, _y, 30, 80, 4.5, 0, 2 * Math.PI);
    fisch2.closePath();
    crc.fillStyle = "#fbff21";
    crc.fill(fisch2);
    crc.strokeStyle = "#ffbc21";
    crc.stroke(fisch2);
    let auge2 = new Path2D();
    auge2.arc(_x - 40, _y + 6, 8, 0, 2 * Math.PI);
    auge2.closePath();
    crc.fillStyle = "white";
    crc.fill(auge2);
    crc.strokeStyle = "black";
    crc.stroke(auge2);
    let iris2 = new Path2D();
    iris2.arc(_x - 40, _y + 6, 5, 2.5, 2 * Math.PI);
    iris2.closePath();
    crc.fillStyle = "black";
    crc.fill(iris2);
    crc.stroke(iris2);
}
function pflanze(_x, _y) {
    let pflanze1 = new Path2D();
    pflanze1.moveTo(800, 630);
    pflanze1.lineTo(780, 630);
    pflanze1.lineTo(800, 400);
    pflanze1.closePath();
    crc.fillStyle = "#5cd65c";
    crc.fill(pflanze1);
    crc.strokeStyle = "green";
    crc.stroke(pflanze1);
    let pflanze2 = new Path2D();
    pflanze2.moveTo(700, 630);
    pflanze2.lineTo(720, 630);
    pflanze2.lineTo(800, 200);
    pflanze2.closePath();
    crc.fillStyle = "#5cd65c";
    crc.fill(pflanze2);
    crc.strokeStyle = "green";
    crc.stroke(pflanze2);
    let pflanze3 = new Path2D();
    pflanze3.moveTo(800, 630);
    pflanze3.lineTo(820, 630);
    pflanze3.lineTo(600, 100);
    pflanze3.closePath();
    crc.fillStyle = "#5cd65c";
    crc.fill(pflanze3);
    crc.strokeStyle = "green";
    crc.stroke(pflanze3);
    let pflanze4 = new Path2D();
    pflanze4.moveTo(600, 630);
    pflanze4.lineTo(620, 630);
    pflanze4.lineTo(700, 100);
    pflanze4.closePath();
    crc.fillStyle = "#00cc99";
    crc.fill(pflanze4);
    crc.strokeStyle = "green";
    crc.stroke(pflanze4);
    let pflanze5 = new Path2D();
    pflanze5.moveTo(300, 630);
    pflanze5.lineTo(320, 630);
    pflanze5.lineTo(200, 100);
    pflanze5.closePath();
    crc.fillStyle = "#00cc99";
    crc.fill(pflanze5);
    crc.strokeStyle = "green";
    crc.stroke(pflanze5);
    let pflanze6 = new Path2D();
    pflanze6.moveTo(400, 630);
    pflanze6.lineTo(420, 630);
    pflanze6.lineTo(400, 100);
    pflanze6.closePath();
    crc.fillStyle = "#00cc99";
    crc.fill(pflanze6);
    crc.strokeStyle = "green";
    crc.stroke(pflanze6);
}
function aal(_x, _y) {
    let aalkoerper = new Path2D();
    aalkoerper.ellipse(_x, _y, 120, 20, 0, 0, Math.PI * 2);
    aalkoerper.closePath();
    crc.fillStyle = "#938773";
    crc.fill(aalkoerper);
    crc.strokeStyle = "black";
    crc.stroke(aalkoerper);
    let auge3 = new Path2D();
    auge3.arc(300, 300, 8, 0, Math.PI * 2);
    auge3.closePath();
    crc.fillStyle = "white";
    crc.fill(auge3);
    crc.strokeStyle = "black";
    crc.stroke(auge3);
    let iris3 = new Path2D();
    iris3.arc(300, 300, 5, 0, 2 * Math.PI);
    iris3.closePath();
    crc.fillStyle = "black";
    crc.fill(iris3);
    crc.stroke(iris3);
}
//# sourceMappingURL=canvas.js.map