/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502 
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */


namespace abschlussaufgabe {

	export class GruenerFisch extends BewegteUnterwasserwelt {

		constructor() {

			super();
			this.x = Math.floor(Math.random() * canvas.width) + 600;
			this.y = Math.random() * canvas.height;
			this.dx = Math.random() * 15 + 2;
			this.groesse = 10;

		}

		draw(): void {

			let fisch1: Path2D = new Path2D();
			fisch1.moveTo(this.x, this.y);
			fisch1.lineTo(this.x - 50, this.y + 30);
			fisch1.lineTo(this.x - 50, this.y - 30);
			fisch1.closePath();
			crc.fillStyle = "#2EFE9A";
			crc.fill(fisch1);
			crc.strokeStyle = "#b30086";
			crc.stroke(fisch1);

			let flosse: Path2D = new Path2D();
			flosse.moveTo(this.x - 47, this.y);
			flosse.lineTo(this.x - 70, this.y + 10);
			flosse.lineTo(this.x - 70, this.y - 10);
			flosse.closePath();
			crc.fillStyle = "#63c29f";
			crc.fill(flosse);
			crc.strokeStyle = "#b30086";
			crc.stroke(flosse);


			let auge1: Path2D = new Path2D();
			auge1.arc(this.x - 20, this.y - 2, 5, 0, 2 * Math.PI);
			auge1.closePath();
			crc.fillStyle = "white";
			crc.fill(auge1);
			crc.strokeStyle = "black";
			crc.stroke(auge1);


			let iris1: Path2D = new Path2D();
			iris1.arc(this.x - 20, this.y - 2, 2, 0, 2 * Math.PI);
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
			if (this.x > canvas.width + 80) {
				this.x = -50;
			}
		}
	}
}