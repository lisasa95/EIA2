namespace a12 {


    export class Futter extends BewegteUnterwasserwelt {


        constructor(x: number, y: number) {
            super(); 
            this.dx = 0;
            this.dy = 5;
        }

        draw(): void {
            let futter: Path2D = new Path2D();
            futter.arc(this.x, this.y, 9,1, Math.PI);
            crc.fillStyle = "brown";
            crc.fill(futter);
        }

        move(): void {
            this.y += this.dy;
            if (this.y >= 900) {
                this.dy = 700;
            }
        }
    }
}  




