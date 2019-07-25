/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502 
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */


namespace endabgabe {

  
    let serverAddress: string = "https://eia2lisa.herokuapp.com/";

    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + Spielername;
        query += "&score=" + Punktestand;
        console.log(query);
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
        let output: HTMLTextAreaElement = document.getElementsByTagName ("textarea") [0];
        output.value = xhr.response;
        let responseAsJson: JSON=JSON.parse(xhr.response);
        console.log(responseAsJson);

        if (xhr.readyState == XMLHttpRequest.DONE) {
            let allPlayersArray: Spieler[] = JSON.parse(xhr.response);

        }

        document.getElementById("NameID").innerHTML = "";
        document.getElementById("PunkteID").innerHTML = "";

        for (let i: number = bewegteUnterwasserweltArray-8; i < bewegteUnterwasserweltArray; i++) {
            document.getElementById("NameID").innerHTML += `<div>${allPlayersArray[i].NameID} : ${bewegteUnterwasserweltArray[i].PunkteID}<div>`;
    
        }
           
        

        
    }


}
