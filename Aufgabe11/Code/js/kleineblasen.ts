namespace a11 {

    export class BlaseKlein {
        x: number;
        y: number;
        dy: number;

        draw(): void {
            let blasen: Path2D = new Path2D();
            blasen.arc(this.x, this.y, 14, 0, 2 * Math.PI);
            crc.strokeStyle = "#0033cc";
            crc.fillStyle = "rgb(153, 221, 255)";
            crc.fill(blasen);
            crc.stroke(blasen);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.y += this.dy;
            if (this.y + 14 < 0)
                this.y = 600;
        }
    }
}