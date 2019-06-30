var a12;
(function (a12) {
    class Futter extends a12.BewegteUnterwasserwelt {
        constructor(x, y) {
            super(x);
            this.x = x;
            this.y = y;
            this.dy = Math.random() * 10;
        }
        draw() {
            let futter = new Path2D();
            futter.arc(this.x, this.y, 9, 1, Math.PI);
            a12.crc.fillStyle = "brown";
            a12.crc.fill(futter);
        }
        move() {
            this.y += this.dy;
            if (this.y >= 900) {
                this.dy = 700;
            }
        }
    }
    a12.Futter = Futter;
})(a12 || (a12 = {}));
//# sourceMappingURL=Futter.js.map