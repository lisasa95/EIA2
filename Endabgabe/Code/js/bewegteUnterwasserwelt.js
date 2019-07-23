var endabgabe;
(function (endabgabe) {
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
                this.x = endabgabe.canvas.width + 100;
        }
    }
    endabgabe.BewegteUnterwasserwelt = BewegteUnterwasserwelt;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=bewegteUnterwasserwelt.js.map