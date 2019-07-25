
/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502 
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */


namespace endabgabe {

    export class BewegteUnterwasserwelt {
        x: number;
        y: number;
        dx: number;
        dy: number;
        groesse: number;

        constructor() {

        }


        draw(): void {
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;




        }
    }
}
