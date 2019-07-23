var endabgabe;
(function (endabgabe) {
    class BlauerFisch extends endabgabe.BewegteUnterwasserwelt {
        constructor() {
            super();
            this.x = Math.random() * endabgabe.canvas.width;
            this.y = Math.random() * endabgabe.canvas.height;
            this.dx = Math.random() * 15 + 2;
        }
        draw() {
            let fisch3 = new Path2D();
            fisch3.arc(this.x, this.y, 45, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "#045FB4";
            endabgabe.crc.fill(fisch3);
            endabgabe.crc.strokeStyle = "#91bee6";
            endabgabe.crc.stroke(fisch3);
            let flosse = new Path2D();
            flosse.moveTo(this.x - 20, this.y + 2);
            flosse.lineTo(this.x - 60, this.y + 15);
            flosse.lineTo(this.x - 60, this.y - 5);
            endabgabe.crc.fillStyle = "045FB4";
            endabgabe.crc.fill(flosse);
            endabgabe.crc.strokeStyle = "#91bee6";
            endabgabe.crc.stroke(flosse);
            let iris = new Path2D();
            iris.arc(this.x + 20, this.y - 4, 8, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "white";
            endabgabe.crc.fill(iris);
            endabgabe.crc.stroke(iris);
            let pupille = new Path2D();
            pupille.arc(this.x + 20, this.y - 6, 5, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "black";
            endabgabe.crc.fill(pupille);
            endabgabe.crc.stroke(pupille);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
        }
    }
    endabgabe.BlauerFisch = BlauerFisch;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=blauerfisch.js.map