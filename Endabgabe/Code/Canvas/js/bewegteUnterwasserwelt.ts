namespace endabgabe {

    export class BewegteUnterwasserwelt {
        x: number;
        y: number;
        dx: number;
        dy: number;


        constructor() {

        }


        draw(): void {
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;




            }
        }
    }
