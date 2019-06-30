var a12;
(function (a12) {
    class BewegteUnterwasserwelt {
        constructor(_x) {
            this.x = 200;
            this.y = 200;
            this.dx = _x * 4;
            this.dy = Math.random() * -15;
        }
        draw() {
            let futter = new Path2D();
            futter.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            a12.crc.fillStyle = "cyan";
            a12.crc.strokeStyle = "blue";
            a12.crc.fill(futter);
            a12.crc.stroke(futter);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x + 200 < 0 - 30)
                this.x = a12.canvas.width + 100;
        }
    }
    a12.BewegteUnterwasserwelt = BewegteUnterwasserwelt;
})(a12 || (a12 = {}));
//# sourceMappingURL=bewegteUnterwasserwelt.js.map