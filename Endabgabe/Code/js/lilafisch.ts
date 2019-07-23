namespace endabgabe {

    export class LilaFisch {
        x: number;
        y: number;
        dx: number;


        draw(): void {

            let schwanz: Path2D = new Path2D();
            schwanz.moveTo(this.x, this.y);
            schwanz.lineTo(this.x + 80, this.y - 100);
            schwanz.lineTo(this.x + 90, this.y + 70);
            schwanz.closePath();
            crc.fillStyle = "#fbff21";
            crc.fill(schwanz);
            crc.strokeStyle = "#ffbc21";
            crc.stroke(schwanz);


            let fisch2: Path2D = new Path2D();
            fisch2.ellipse(this.x, this.y, 30, 80, 4.5, 0, 2 * Math.PI);
            fisch2.closePath();
            crc.fillStyle = "#BE81F7";
            crc.fill(fisch2);
            crc.strokeStyle = "#F781F3";
            crc.stroke(fisch2);


            let auge2: Path2D = new Path2D();
            auge2.arc(this.x - 40, this.y + 6, 8, 0, 2 * Math.PI);
            auge2.closePath();
            crc.fillStyle = "white";
            crc.fill(auge2);
            crc.strokeStyle = "black";
            crc.stroke(auge2);


            let iris2: Path2D = new Path2D();
            iris2.arc(this.x - 40, this.y + 6, 5, 2.5, 2 * Math.PI);
            iris2.closePath();
            crc.fillStyle = "black";
            crc.fill(iris2);
            crc.stroke(iris2);
        }



        update(): void {
            this.move();
            this.draw();
        }



        move(): void {
            this.x += this.dx;
            if (this.x + 200 < 0 - 30)
                this.x = canvas.width +100;
        }
    }

}

