var endabgabe;
(function (endabgabe) {
    class BlaseKlein {
        draw() {
            let blasen = new Path2D();
            blasen.arc(this.x, this.y, 14, 0, 2 * Math.PI);
            endabgabe.crc.strokeStyle = "#0033cc";
            endabgabe.crc.fillStyle = "rgb(153, 221, 255)";
            endabgabe.crc.fill(blasen);
            endabgabe.crc.stroke(blasen);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y + 14 < 0)
                this.y = 600;
        }
    }
    endabgabe.BlaseKlein = BlaseKlein;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=kleineblasen.js.map