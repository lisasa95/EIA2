namespace endabgabe {

    export class SpielerFisch {

        
        x: number;
		y: number;
        dx: number;
        dy: number;
        
        constructor() { 
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.dx = 0;
            this.dy = 0;
        }

        draw(): void {

            let fisch3: Path2D = new Path2D();
            fisch3.arc(this.x, this.y, 48, 0, 2 * Math.PI);
            crc.fillStyle = "#045FB4";
            crc.fill(fisch3);
            crc.strokeStyle = "#91bee6";
            crc.stroke(fisch3);


            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x - 20, this.y + 2);
            flosse.lineTo(this.x - 60, this.y + 15);
            flosse.lineTo(this.x - 60, this.y - 5);
            crc.fillStyle = "045FB4";
            crc.fill(flosse);
            crc.strokeStyle = "#91bee6";
            crc.stroke(flosse);


            let iris: Path2D = new Path2D();
            iris.arc(this.x + 20, this.y -4, 8, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(iris);
            crc.stroke(iris);

            let pupille: Path2D = new Path2D();
            pupille.arc(this.x + 20, this.y -6, 5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(pupille);
            crc.stroke(pupille);
        }

    update(): void {
        this.move();
        this.draw();
    }



    move(): void {

    

    
    }
}

}

