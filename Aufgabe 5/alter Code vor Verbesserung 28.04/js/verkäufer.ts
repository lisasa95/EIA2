/* Aufgabe 5: 
Aufgabe: Aufgabe Nummer 5 - Eisdealer re-loaded
Name: Lisa Sanchez y Bittner
Matrikel: 260502 
Datum: 28.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/


namespace a5 {

    export interface Daten {
        typ: string;
        name: string;
        preis: number;
    }
        
    
    export let eissortenarray: Daten[] = [ //multidimensionales heterogenes Array
        {typ: "eissorte", name: "Schokolade", preis: 1},
        {typ: "eissorte", name: "Vanille", preis: 1},
        {typ: "eissorte", name: "Himbeere", preis: 1},
        {typ: "eissorte", name: "Joghurt", preis: 1}
    ];
       
    export let toppingarray: Daten[] = [
        {typ: "topping", name: "Streusel", preis: 0.80},
        {typ: "topping", name: "Krokant", preis: 0.80},
        {typ: "topping", name: "Schokosauce", preis: 0.80},
        {typ: "topping", name: "Sahne", preis: 0.80}
    ];
        
        
    export let behalterarray: Daten[] = [
        {typ: "behaelter", name: "Waffel", preis: 0},
        {typ: "behaelter", name: "Becher", preis: 1}
    ];    
        
        
    export let lieferoptionenarray: Daten[] = [
        {typ: "lieferoption", name: "Lieferung", preis: 3},
        {typ: "lieferoption", name: "Abholung", preis: 0}
    ]; 
           
    }