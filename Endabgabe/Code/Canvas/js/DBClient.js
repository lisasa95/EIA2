/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var abschlussaufgabe;
(function (abschlussaufgabe) {
    let serverAddress = "https://eia2lisa.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + abschlussaufgabe.Spielername;
        query += "&punkte=" + abschlussaufgabe.Punktestand;
        sendRequest(query, handleInsertResponse);
    }
    abschlussaufgabe.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    abschlussaufgabe.refresh = refresh;
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
            for (let i = 0; i < SpielerArray.length; i++) {
                SpielerArray.sort(Rangliste);
            }
            document.getElementById("NameID").innerHTML = "";
            document.getElementById("PunkteID").innerHTML = "";
            for (let i = 0; i < 10; i++) {
                document.getElementById("NameID").innerHTML += `<div>${SpielerArray[i].name} : ${SpielerArray[i].punkte} </div>`;
            }
        }
    }
    function Rangliste(_1, _2) {
        if (_1.punkte < _2.punkte) {
            return 1;
        }
        if (_1.punkte > _2.punkte) {
            return -1;
        }
        return 0;
    }
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=DBClient.js.map