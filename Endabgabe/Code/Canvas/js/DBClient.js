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
        query += "&score=" + endabgabe.Punktestand;
        console.log(query);
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
        let output = document.getElementsByTagName("textarea")[0];
        output.value = xhr.response;
        let responseAsJson = JSON.parse(xhr.response);
        console.log(responseAsJson);
        /* if (xhr.readyState == XMLHttpRequest.DONE) {
            let allPlayersArray: Spieler[] = JSON.parse(xhr.response);


        }

        document.getElementById("NameID").innerHTML = "";
        document.getElementById("PunkteID").innerHTML = "";

        for (let i: number = 0; i < 10; i++) {
           
            document.getElementById("NameID").innerHTML +=;
            newPlayer.setAttribute("id", i.toString());
            newPlayer.innerHTML = `${allPlayersArray[i].name} : ${allPlayersArray[i].score}`;
        } */
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=DBClient.js.map