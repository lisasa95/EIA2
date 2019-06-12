var a11;
(function (a11) {
    class BlaseKlein {
        draw() {
            let blasen = new Path2D();
            blasen.arc(this.x, this.y, 14, 0, 2 * Math.PI);
            a11.crc.strokeStyle = "#0033cc";
            a11.crc.fillStyle = "rgb(153, 221, 255)";
            a11.crc.fill(blasen);
            a11.crc.stroke(blasen);
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
    a11.BlaseKlein = BlaseKlein;
})(a11 || (a11 = {}));
//# sourceMappingURL=kleineblasen.js.map