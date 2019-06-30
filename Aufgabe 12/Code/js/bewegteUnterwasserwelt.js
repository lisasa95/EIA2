var a12;
(function (a12) {
    class BewegteUnterwasserwelt {
        constructor() {
            this.x = 100;
            this.y = 100;
            this.dx = 2;
            this.dy = Math.random() * 10;
        }
        draw() {
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 20)
                this.x = a12.canvas.width + 100;
        }
    }
    a12.BewegteUnterwasserwelt = BewegteUnterwasserwelt;
})(a12 || (a12 = {}));
//# sourceMappingURL=bewegteUnterwasserwelt.js.map