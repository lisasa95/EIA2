/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var endabgabe;
(function (endabgabe) {
    let serverAddress = "https://eia2lisa.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + endabgabe.Spielername;
        query += "&punktestand=" + endabgabe.Punktestand;
        sendRequest(query, handleInsertResponse);
    }
    endabgabe.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    endabgabe.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let SpielerArray = JSON.parse(xhr.response);
            document.getElementById("nameID").innerHTML = "";
            document.getElementById("punktestandID").innerHTML = "";
            for (let i = SpielerArray.length - 5; i < SpielerArray.length; i++) {
                document.getElementById("nameID").innerHTML += `<div>${SpielerArray[i].name} : ${SpielerArray[i].punkte} </div>`;
            }
        }
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=DBClient.js.map