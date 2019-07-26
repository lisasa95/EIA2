/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502 
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */


namespace abschlussaufgabe {




    let serverAddress: string = "https://eia2lisa.herokuapp.com/";
    
    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + Spielername;
        query += "&punkte=" + Punktestand;
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let SpielerArray: Spieler[] = JSON.parse(xhr.response);

            for (let i: number = 0; i < SpielerArray.length; i++) {
                SpielerArray.sort(Rangliste);
            }

            document.getElementById("NameID").innerHTML = "";
            document.getElementById("PunkteID").innerHTML = "";


            for (let i: number = 0; i < 10; i++) {

                document.getElementById("NameID").innerHTML += `<div>${SpielerArray[i].name} : ${SpielerArray[i].punkte} </div>`;
            }


        }

    }

    function Rangliste(_1: Spieler, _2: Spieler): number {

        if (_1.punkte < _2.punkte) {
            return 1;
        }
        if (_1.punkte > _2.punkte) {
            return -1;
        }
        return 0;
    }
}


