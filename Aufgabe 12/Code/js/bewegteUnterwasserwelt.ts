namespace a12 {

    export class BewegteUnterwasserwelt {
        x: number;
        y: number;
        dx: number;
        dy: number;


        constructor(_x: number) {
            this.x = 200;
            this.y = 200;
            this.dx = _x * 4;
            this.dy = Math.random() * -15;
        }


        draw(): void {
            let futter: Path2D = new Path2D();
            futter.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            crc.fillStyle = "cyan";
            crc.strokeStyle = "blue";
            crc.fill(futter);
            crc.stroke(futter);

        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x + 200 < 0 - 30)
                this.x = canvas.width +100;




            }
        }
    }
