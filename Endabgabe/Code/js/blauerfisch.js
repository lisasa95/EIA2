var endabgabe;
(function (endabgabe) {
    class BlauerFisch {
        draw() {
            let fisch3 = new Path2D();
            fisch3.moveTo(this.x, this.y);
            fisch3.quadraticCurveTo(this.x - 1, this.y + 100, this.x - 200, this.y - 1);
            fisch3.lineTo(this.x - 200, this.y + 1);
            fisch3.quadraticCurveTo(this.x - 500, this.y - 100, this.x, this.y);
            endabgabe.crc.fillStyle = "#045FB4";
            endabgabe.crc.fill(fisch3);
            endabgabe.crc.stroke(fisch3);
            let iris = new Path2D();
            iris.arc(this.x - 40, this.y - 5, 5, 0, 2 * Math.PI);
            endabgabe.crc.fillStyle = "#FA5882";
            endabgabe.crc.fill(iris);
            endabgabe.crc.stroke(iris);
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