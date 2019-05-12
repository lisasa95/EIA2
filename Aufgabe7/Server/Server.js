"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // http-Objekt wird aus "http" importiert; TS wird vermittelt, dass Node verwendet wird
const Url = require("url");
console.log("Starting server"); // in der Konsole wird "Starting Server" ausgegeben
let port = Number(process.env.PORT); // eine neue Variable vom Typ Number und mit dem Namen "port" wird erstellt, auf die der Server hören soll
if (!port) // wenn port nicht richtig/anders ist, soll nächste Zeile ausgelesen werden
    port = 8100; //port wird der Wert 8100 zugewiesen
let server = Http.createServer(); // eine neue Variable vom Typ Http.Server und mit dem Namen "server" wird erstellt
server.addListener("request", handleRequest); // der Variable "server" wird ein Listener zugefügt, der auf "request" hört und dann die Funktion "handleRequest" ausführt
server.addListener("listening", handleListen); // der Variable "server" wird ein Listener zugefügt, der auf "listening" hört und dann die Funktion "handleListen" ausführt
server.listen(port); // die Variable "server" hört jetzt auf die Variable "port"
function handleListen() {
    console.log("Listening"); // in der Konsole wird "Listening" ausgegeben, sobald die Funktion "handleListen" ausgeführt wird
} // die Funktion "handleListen" wird geschlossen
function handleRequest(_request, _response) {
    console.log("I hear voices!"); // in der Konsole wird "I hear voices!" ausgegeben, sobald die Funktion "handleRequest" ausgeführt wird
    console.log(_request.url);
    _response.setHeader("content-type", "text/html; charset=utf-8"); // Header-Werte für Header-Objekt werden definiert; die Contentart, die Art des Dokuments "text/html" und die Unicode-Codierung "charset=utf-8" sind vorgegeben
    _response.setHeader("Access-Control-Allow-Origin", "*"); // "Acess-Control-Allow-Origin" wird als Header-Wert festgelegt, erlaubt Webbrowsern oder Clients den Zugriff über einen anderen Server oder andere Domain
    // _response.write(_request.url); // _request.url wird in _response.write in der URL geschrieben, vom Server so empfangen --- 2.4 Was hinter Schrägstrich in der URL eingetragen wird, steht dann auch im Browser 
    //console.log (_request.url);
    _response.write("<h3>Wir bestätigen hiermit folgende Artikel:</h3>");
    let url = Url.parse(_request.url, true);
    for (let key in url.query)
        _response.write("<p>" + key + url.query[key] + "</p> <br>");
    _response.end(); // _response wird beendet; der Server bekommt die Nachricht, dass request nun fertig ist
} // die Funktion "handleRequest" wird geschlossen
//# sourceMappingURL=Server.js.map