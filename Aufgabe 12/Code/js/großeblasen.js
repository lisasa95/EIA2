var a12;
(function (a12) {
    class BlaseGross {
        draw() {
            let blasen = new Path2D();
            blasen.arc(this.x, this.y, 25, 0, 2 * Math.PI);
            a12.crc.strokeStyle = "#0033cc";
            a12.crc.fillStyle = "rgb(153, 221, 255)";
            a12.crc.fill(blasen);
            a12.crc.stroke(blasen);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y + 25 < 0)
                this.y = 600;
        }
    }
    a12.BlaseGross = BlaseGross;
})(a12 || (a12 = {}));
//# sourceMappingURL=großeblasen.js.map