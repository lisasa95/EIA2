namespace a12 {

    export class BewegteUnterwasserwelt {
        x: number;
        y: number;
        dx: number;
        dy: number;


        constructor() {
            this.x = 100;
            this.y = 100;
            this.dx = 2;
            this.dy = Math.random() * 10;
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
            if (this.x < 20)
                this.x = canvas.width +100;




            }
        }
    }
