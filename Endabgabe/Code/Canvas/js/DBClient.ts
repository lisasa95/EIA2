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
        query +="&punktestand=" + Punktestand;
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
            let SpielerArray = JSON.parse(xhr.response);
            

            document.getElementById("nameID").innerHTML = "";
            document.getElementById("punktestandID").innerHTML = "";


            for (let i: number = SpielerArray.length-5; i < SpielerArray.length; i++) {
    
                document.getElementById("nameID").innerHTML += `<div>${SpielerArray[i].name} : ${SpielerArray[i].punkte} </div>`;
            }

        
        }
    }
}


