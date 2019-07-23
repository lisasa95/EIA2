namespace endabgabe {

    export class BlaseKlein extends BewegteUnterwasserwelt {

        constructor() {

        super();
        this.x = Math.random() * canvas.width;
		this.y = Math.random() * canvas.height;
		this.dy = Math.random() * -8 - 1;
        }


        draw(): void {
            let blasen: Path2D = new Path2D();
            blasen.arc(this.x, this.y, 14, 0, 2 * Math.PI);
            crc.strokeStyle = "#0033cc";
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