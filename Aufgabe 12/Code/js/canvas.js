var a12;
(function (a12) {
    /*Aufgabe 12: /*
    Aufgabe: Aufgabe Nummer 12 - Vererbung: Seaworld
    Name: Lisa Sanchez y Bittner
    Matrikel: 260502
    Datum: 30.06.2019
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
    document.addEventListener("DOMContentLoaded", init);
    a12.bewegteUnterwasserweltArray = [];
    let gelberFischArray = [];
    let pinkerFischArray = [];
    let blaseGrossArray = [];
    let blaseKleinArray = [];
    let fps = 25;
    let imageData;
    function init() {
        a12.canvas = document.getElementsByTagName("canvas")[0];
        a12.crc = a12.canvas.getContext("2d");
        zeichneHintergrund();
        imageData = a12.crc.getImageData(0, 0, a12.canvas.width, a12.canvas.height);
        a12.canvas.addEventListener("click", futterVerteilen);
        //Pinker Fisch
        for (let i = 0; i <= 10; i++) {
            let x = Math.random() * a12.canvas.width;
            let y = Math.random() * a12.canvas.height;
            let dx = Math.random() * 15 +
                2;
            let pink;
            pink = new a12.PinkerFisch();
            pink.x = x;
            pink.y = y;
            pink.dx = dx;
            pinkerFischArray.push(pink);
            pink.draw();
        }
        //Gelber Fisch
        for (let i = 0; i <= 13; i++) {
            let x = Math.random() * a12.canvas.width;
            let y = Math.random() * a12.canvas.height;
            let dx = Math.random() * 5 - 15;
            let gelb;
            gelb = new a12.GelberFisch();
            gelb.x = x;
            gelb.y = y;
            gelb.dx = dx;
            gelberFischArray.push(gelb);
            gelb.draw();
        }
        //Große Luftblasen
        for (let i = 0; i <= 10; i++) {
            let x = Math.random() * a12.canvas.width;
            let y = Math.random() * a12.canvas.height;
            let dy = Math.random() * 5 - 15;
            let gross;
            gross = new a12.BlaseGross();
            gross.x = x;
            gross.y = y;
            gross.dy = dy;
            blaseGrossArray.push(gross);
            gross.draw();
        }
        //Kleine Blase
        for (let i = 0; i <= 70; i++) {
            let x = Math.random() * a12.canvas.width;
            let y = Math.random() * a12.canvas.height;
            let dy = Math.random() * -8 - 1;
            let klein;
            klein = new a12.BlaseKlein();
            klein.x = x;
            klein.y = y;
            klein.dy = dy;
            blaseKleinArray.push(klein);
            klein.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        a12.crc.clearRect(0, 0, a12.canvas.width, a12.canvas.height);
        a12.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < pinkerFischArray.length; i++) {
            pinkerFischArray[i].update();
        }
        for (let i = 0; i < gelberFischArray.length; i++) {
            gelberFischArray[i].update();
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
        a12.crc.fillStyle = "#e6f7ff";
        a12.crc.fill(wasser);
        let boden = new Path2D();
        boden.rect(0, 600, 1000, 100);
        a12.crc.fillStyle = "#CDBA96";
        a12.crc.fill(boden);
        let stein = new Path2D();
        stein.moveTo(620, 620);
        stein.quadraticCurveTo(100, 300, 50, 620);
        stein.closePath();
        a12.crc.fillStyle = "#c2c2d6";
        a12.crc.fill(stein);
        a12.crc.strokeStyle = "#5c5c8a";
        a12.crc.stroke(stein);
        let pflanze1 = new Path2D();
        pflanze1.moveTo(800, 630);
        pflanze1.lineTo(780, 630);
        pflanze1.lineTo(800, 400);
        pflanze1.closePath();
        a12.crc.fillStyle = "#5cd65c";
        a12.crc.fill(pflanze1);
        a12.crc.strokeStyle = "green";
        a12.crc.stroke(pflanze1);
        let pflanze2 = new Path2D();
        pflanze2.moveTo(700, 630);
        pflanze2.lineTo(720, 630);
        pflanze2.lineTo(800, 200);
        pflanze2.closePath();
        a12.crc.fillStyle = "#5cd65c";
        a12.crc.fill(pflanze2);
        a12.crc.strokeStyle = "green";
        a12.crc.stroke(pflanze2);
        let pflanze3 = new Path2D();
        pflanze3.moveTo(800, 630);
        pflanze3.lineTo(820, 630);
        pflanze3.lineTo(600, 100);
        pflanze3.closePath();
        a12.crc.fillStyle = "#5cd65c";
        a12.crc.fill(pflanze3);
        a12.crc.strokeStyle = "green";
        a12.crc.stroke(pflanze3);
        let pflanze4 = new Path2D();
        pflanze4.moveTo(600, 630);
        pflanze4.lineTo(620, 630);
        pflanze4.lineTo(700, 100);
        pflanze4.closePath();
        a12.crc.fillStyle = "#00cc99";
        a12.crc.fill(pflanze4);
        a12.crc.strokeStyle = "green";
        a12.crc.stroke(pflanze4);
        let pflanze5 = new Path2D();
        pflanze5.moveTo(300, 630);
        pflanze5.lineTo(320, 630);
        pflanze5.lineTo(200, 100);
        pflanze5.closePath();
        a12.crc.fillStyle = "#00cc99";
        a12.crc.fill(pflanze5);
        a12.crc.strokeStyle = "green";
        a12.crc.stroke(pflanze5);
        let pflanze6 = new Path2D();
        pflanze6.moveTo(400, 630);
        pflanze6.lineTo(420, 630);
        pflanze6.lineTo(400, 100);
        pflanze6.closePath();
        a12.crc.fillStyle = "#00cc99";
        a12.crc.fill(pflanze6);
        a12.crc.strokeStyle = "green";
        a12.crc.stroke(pflanze6);
    }
    function futterVerteilen(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        if (x < a12.canvas.width && y < a12.canvas.height) {
            let futter = new a12.Futter(x, y);
            a12.bewegteUnterwasserweltArray.push(futter);
        }
    }
})(a12 || (a12 = {}));
//# sourceMappingURL=canvas.js.map