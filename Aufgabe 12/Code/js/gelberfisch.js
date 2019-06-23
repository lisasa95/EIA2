var a12;
(function (a12) {
    class GelberFisch {
        draw() {
            let schwanz = new Path2D();
            schwanz.moveTo(this.x, this.y);
            schwanz.lineTo(this.x + 80, this.y - 100);
            schwanz.lineTo(this.x + 90, this.y + 70);
            schwanz.closePath();
            a12.crc.fillStyle = "#fbff21";
            a12.crc.fill(schwanz);
            a12.crc.strokeStyle = "#ffbc21";
            a12.crc.stroke(schwanz);
            let fisch2 = new Path2D();
            fisch2.ellipse(this.x, this.y, 30, 80, 4.5, 0, 2 * Math.PI);
            fisch2.closePath();
            a12.crc.fillStyle = "#fbff21";
            a12.crc.fill(fisch2);
            a12.crc.strokeStyle = "#ffbc21";
            a12.crc.stroke(fisch2);
            let auge2 = new Path2D();
            auge2.arc(this.x - 40, this.y + 6, 8, 0, 2 * Math.PI);
            auge2.closePath();
            a12.crc.fillStyle = "white";
            a12.crc.fill(auge2);
            a12.crc.strokeStyle = "black";
            a12.crc.stroke(auge2);
            let iris2 = new Path2D();
            iris2.arc(this.x - 40, this.y + 6, 5, 2.5, 2 * Math.PI);
            iris2.closePath();
            a12.crc.fillStyle = "black";
            a12.crc.fill(iris2);
            a12.crc.stroke(iris2);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x + 200 < 0 - 30)
                this.x = a12.canvas.width + 100;
        }
    }
    a12.GelberFisch = GelberFisch;
})(a12 || (a12 = {}));
//# sourceMappingURL=gelberfisch.js.map