/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502 
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */


namespace endabgabe {

    export class SpielerFisch {


        x: number;
        y: number;
        dx: number;
        dy: number;
        groesse: number = 15;
        schwimmrichtung: string = "rechts";

        constructor() {
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            this.dx = 0;
            this.dy = 0;

        }

        draw(): void {

            if (this.schwimmrichtung == "rechts") {

                let fisch3: Path2D = new Path2D();
                fisch3.arc(this.x, this.y, (this.groesse * 30) / 10, 0, 2 * Math.PI); // 40 als zweiter wert
                crc.fillStyle = "#045FB4";
                crc.fill(fisch3);
                crc.strokeStyle = "#91bee6";
                crc.stroke(fisch3);


                let flosse: Path2D = new Path2D();
                flosse.moveTo(this.x - (20 * this.groesse) / 10, this.y + (2 * this.groesse) / 10);
                flosse.lineTo(this.x - (60 * this.groesse) / 10, this.y + (15 * this.groesse) / 10);
                flosse.lineTo(this.x - (60 * this.groesse) / 10, this.y - (5 * this.groesse) / 10);
                crc.fillStyle = "045FB4";
                crc.fill(flosse);
                crc.strokeStyle = "#91bee6";
                crc.stroke(flosse);


                let iris: Path2D = new Path2D();
                iris.arc(this.x + 20, this.y - 4, 8, 0, 2 * Math.PI);
                crc.fillStyle = "white";
                crc.fill(iris);
                crc.stroke(iris);

                let pupille: Path2D = new Path2D();
                pupille.arc(this.x + 20, this.y - 6, 5, 0, 2 * Math.PI);
                crc.fillStyle = "black";
                crc.fill(pupille);
                crc.stroke(pupille);
            }

            else {

                let fisch3: Path2D = new Path2D();
                fisch3.arc(this.x, this.y, (this.groesse * 30) / 10, 0, 2 * Math.PI);
                crc.fillStyle = "#045FB4";
                crc.fill(fisch3);
                crc.strokeStyle = "#91bee6";
                crc.stroke(fisch3);


                let flosse: Path2D = new Path2D();
                flosse.moveTo(this.x + (20 * this.groesse) / 10, this.y + (2 * this.groesse) / 10);
                flosse.lineTo(this.x + (60 * this.groesse) / 10, this.y + (15 * this.groesse) / 10);
                flosse.lineTo(this.x + (60 * this.groesse) / 10, this.y - (5 * this.groesse) / 10);
                crc.fillStyle = "045FB4";
                crc.fill(flosse);
                crc.strokeStyle = "#91bee6";
                crc.stroke(flosse);


                let iris: Path2D = new Path2D();
                iris.arc(this.x - 20, this.y - 4, 8, 0, 2 * Math.PI);
                crc.fillStyle = "white";
                crc.fill(iris);
                crc.stroke(iris);

                let pupille: Path2D = new Path2D();
                pupille.arc(this.x - 20, this.y - 6, 5, 0, 2 * Math.PI);
                crc.fillStyle = "black";
                crc.fill(pupille);
                crc.stroke(pupille);


            }


        }

        kollision(fisch: BewegteUnterwasserwelt): string {
            let xDistanz: number = Math.abs(this.x - fisch.x);
            let yDistanz: number = Math.abs(this.y - fisch.y);

            if (Math.sqrt(Math.pow(xDistanz, 2) + Math.pow(yDistanz, 2)) < 50) {
                if (this.groesse > fisch.groesse) {
                    this.groesse++;
                    Punktestand += 5;
                    console.log(this.groesse);
                    return "essen";
                }

                else {
                    alert("Du bist gestorben!");
                    return"tot";
                }
            }

            else return "nichts";

        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x > canvas.width) {
                this.x = canvas.width;
            }

            else if (this.x < 0) {
                this.x = 0;
            }

            else if (this.y > canvas.height) {
                this.y = canvas.height;
            }

            else if (this.y < 0) {
                this.y = 0;
            }
        }

        update(): void {
            this.move();
            this.draw();

        }


    }

}

