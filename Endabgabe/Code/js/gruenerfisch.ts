namespace endabgabe {

	export class GruenerFisch {
		x: number;
		y: number;
		dx: number;


		draw(): void {

			let fisch1: Path2D = new Path2D();
			fisch1.quadraticCurveTo(this.x + 70, this.y - 70, this.x + 30, this.y - 10);
			fisch1.lineTo(this.x + 150, this.y - 40);
			fisch1.quadraticCurveTo(this.x + 200, this.y + 70, this.x + 100, this.y + 20);
			fisch1.lineTo(this.x + 70, this.y - 70);
			fisch1.closePath();
			crc.fillStyle = "#2EFE9A";
			crc.fill(fisch1);
			crc.strokeStyle = "#b30086";
			crc.stroke(fisch1);


			let auge1: Path2D = new Path2D();
			auge1.arc(this.x + 140, this.y + 5, 5, 0, 2 * Math.PI);
			auge1.closePath();
			crc.fillStyle = "white";
			crc.fill(auge1);
			crc.strokeStyle = "black";
			crc.stroke(auge1);


			let iris1: Path2D = new Path2D();
			iris1.arc(this.x + 140, this.y + 5, 2, 0, 2 * Math.PI);
			iris1.closePath();
			crc.fillStyle = "black";
			crc.fill(iris1);
			crc.stroke(iris1);

		}

		update(): void {
			this.move();
			this.draw();
		}



		move(): void {
			this.x += this.dx;
			if (this.x + 100 > canvas.width + 80) {
				this.x = -50;
			}
		}
	}
}