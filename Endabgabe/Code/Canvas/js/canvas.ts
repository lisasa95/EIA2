/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502 
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */


namespace abschlussaufgabe {


	document.addEventListener("DOMContentLoaded", init);



	export let crc: CanvasRenderingContext2D;
	export let canvas: HTMLCanvasElement;
	export let bewegteUnterwasserweltArray: BewegteUnterwasserwelt[] = [];

	export let Punktestand: number = 0;
	export let Spielername: string;
	export let timer: number;

	let spielerfisch: SpielerFisch;
	let fps: number = 25;
	let imageData: ImageData;


	function init(): void { // FUNKTION zeichnet Fische und definiert Variablen und Funktionen
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");

		refresh();

		zeichneHintergrund();

		imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

		spielerfisch = new SpielerFisch();
		spielerfisch.draw();

		document.addEventListener("keydown", moveSpielerFisch);



		//Grüner Fisch
		for (let i: number = 0; i <= 7; i++) {
			let gruen: GruenerFisch;
			gruen = new GruenerFisch();
			bewegteUnterwasserweltArray.push(gruen);
			gruen.draw();
		}


		//Lila Fisch
		for (let i: number = 0; i <= 7; i++) {
			let lila: LilaFisch;
			lila = new LilaFisch();
			bewegteUnterwasserweltArray.push(lila);
			lila.draw();
		}

		//Große Luftblasen
		for (let i: number = 0; i <= 10; i++) {
			let gross: BlaseGross;
			gross = new BlaseGross();
			bewegteUnterwasserweltArray.push(gross);
			gross.draw();
		}

			// Kleine Blase
		for (let i: number = 0; i <= 20; i++) {
			let klein: BlaseKlein;
			klein = new BlaseKlein();
			bewegteUnterwasserweltArray.push(klein);
			klein.draw();
		} 


		update();

	}




	function update(): void { // FUNKTION Updatet die Fische und Alert
		timer = window.setTimeout(update, 1000 / fps);
		crc.clearRect(0, 0, canvas.width, canvas.height);
		crc.putImageData(imageData, 0, 0);

		spielerfisch.update();



		for (let i: number = 0; i < bewegteUnterwasserweltArray.length; i++) {
			bewegteUnterwasserweltArray[i].update();

			if (spielerfisch.kollision(bewegteUnterwasserweltArray[i]) == "essen") {
				bewegteUnterwasserweltArray.splice(i, 1);
			}

			else if (spielerfisch.kollision(bewegteUnterwasserweltArray[i]) == "tot") {
				window.clearTimeout(timer);
				alert("Du bist gestorben!");
				Spielername = prompt("Erreichte Punktzahl: " + Punktestand, "Bitte Name eingeben");
				insert();
				refresh();
			}
			console.log("Du hast gewonnen!");
		}

		if (bewegteUnterwasserweltArray.length == 0) {
			window.clearTimeout(timer);
			Spielername = prompt("Erreichte Punktzahl: " + Punktestand, "Bitte Name eingeben");
			insert();
			refresh();
		}


		crc.fillStyle = "#8021a6";
		crc.font = "20px Arial";
		crc.fillText("Punktestand: " + Punktestand.toString(), 850, 30)




	}

	function zeichneHintergrund(): void { // FUNKTION zeichnet Hintergrund des Canvas

		let wasser: Path2D = new Path2D();
		wasser.rect(0, 0, 1000, 700);
		crc.fillStyle = "#86A8E7";
		crc.fill(wasser);


		let boden: Path2D = new Path2D();
		boden.rect(0, 600, 1000, 100);
		crc.fillStyle = "#CDBA96";
		crc.fill(boden);


		let stein: Path2D = new Path2D();
		stein.moveTo(620, 620);
		stein.quadraticCurveTo(100, 300, 50, 620);
		stein.closePath();
		crc.fillStyle = "#c2c2d6";
		crc.fill(stein);
		crc.strokeStyle = "#5c5c8a";
		crc.stroke(stein);


		let pflanze1: Path2D = new Path2D();
		pflanze1.moveTo(800, 630);
		pflanze1.lineTo(780, 630);
		pflanze1.lineTo(800, 400);
		pflanze1.closePath();
		crc.fillStyle = "#5cd65c";
		crc.fill(pflanze1);
		crc.strokeStyle = "green";
		crc.stroke(pflanze1);


		let pflanze2: Path2D = new Path2D();
		pflanze2.moveTo(700, 630);
		pflanze2.lineTo(720, 630);
		pflanze2.lineTo(800, 200);
		pflanze2.closePath();
		crc.fillStyle = "#5cd65c";
		crc.fill(pflanze2);
		crc.strokeStyle = "green";
		crc.stroke(pflanze2);



		let pflanze3: Path2D = new Path2D();
		pflanze3.moveTo(800, 630);
		pflanze3.lineTo(820, 630);
		pflanze3.lineTo(600, 100);
		pflanze3.closePath();
		crc.fillStyle = "#5cd65c";
		crc.fill(pflanze3);
		crc.strokeStyle = "green";
		crc.stroke(pflanze3);


		let pflanze4: Path2D = new Path2D();
		pflanze4.moveTo(600, 630);
		pflanze4.lineTo(620, 630);
		pflanze4.lineTo(700, 100);
		pflanze4.closePath();
		crc.fillStyle = "#00cc99";
		crc.fill(pflanze4);
		crc.strokeStyle = "green";
		crc.stroke(pflanze4);


		let pflanze5: Path2D = new Path2D();
		pflanze5.moveTo(300, 630);
		pflanze5.lineTo(320, 630);
		pflanze5.lineTo(200, 100);
		pflanze5.closePath();
		crc.fillStyle = "#00cc99";
		crc.fill(pflanze5);
		crc.strokeStyle = "green";
		crc.stroke(pflanze5);



		let pflanze6: Path2D = new Path2D();
		pflanze6.moveTo(400, 630);
		pflanze6.lineTo(420, 630);
		pflanze6.lineTo(400, 100);
		pflanze6.closePath();
		crc.fillStyle = "#00cc99";
		crc.fill(pflanze6);
		crc.strokeStyle = "green";
		crc.stroke(pflanze6);

	}


	function moveSpielerFisch(e: KeyboardEvent): void { // FUNKTION um Spielerfisch zu bewegen

		if (e.keyCode == 37) { // Linke Pfeiltaste

			spielerfisch.x -= 15;
			spielerfisch.schwimmrichtung = "links";
		}

		else if (e.keyCode == 38) { // Obere Pfeiltaste

			spielerfisch.y -= 15;
		}

		else if (e.keyCode == 39) { // Rechte Pfeiltaste

			spielerfisch.x += 15;
			spielerfisch.schwimmrichtung = "rechts";
		}

		else if (e.keyCode == 40) { // Untere Pfeiltaste

			spielerfisch.y += 15;
		}
	}


}