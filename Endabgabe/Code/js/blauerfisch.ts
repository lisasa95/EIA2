namespace endabgabe {

    export class BlauerFisch {
        x: number;
        y: number;
        dx: number;


        draw(): void {

            let fisch3: Path2D = new Path2D();
            fisch3.moveTo(this.x, this.y);
            fisch3.quadraticCurveTo(this.x -1, this.y + 100, this.x - 200, this.y -1);
            fisch3.lineTo(this.x - 200, this.y +1);
            fisch3.quadraticCurveTo(this.x - 500, this.y - 100, this.x, this.y);
            crc.fillStyle = "#045FB4";
            crc.fill(fisch3);
            crc.stroke(fisch3);


            let iris: Path2D = new Path2D();
            iris.arc(this.x - 40, this.y - 5, 5, 0, 2 * Math.PI);
            crc.fillStyle = "#FA5882";
            crc.fill(iris);
            crc.stroke(iris);
        }

    update(): void {
        this.move();
        this.draw();
    }



    move(): void {

        // Pfeiltaste nach oben
		if (event.keyCode == 38) { 
		}

		// Pfeiltaste nach unten
		else if (event.keyCode == 40) {
			

    
    }
}

}

