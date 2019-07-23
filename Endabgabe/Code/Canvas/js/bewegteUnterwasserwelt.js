var endabgabe;
(function (endabgabe) {
    class BewegteUnterwasserwelt {
        constructor() {
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
        }
    }
    endabgabe.BewegteUnterwasserwelt = BewegteUnterwasserwelt;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=bewegteUnterwasserwelt.js.map