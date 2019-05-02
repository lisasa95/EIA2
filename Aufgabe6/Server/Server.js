"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // http Objekt wird importiert aus "http" = Typescript wird vermittelt das Node verwendet wird
// Namespace mit dem Namen "L05_Server" wird erstellt
console.log("Starting server"); // in der Konsole wird zu Beginn "Starting Server" ausgegeben
let port = Number(process.env.PORT); // neue Variable mit Namen "port" wird erstellt, vom Typ number auf die Server hören soll
if (!port) // wenn Port nicht richtig/anders ist, soll nächste Zeile ausgelesen werden
    port = 8100; //Port bekommt den Wert 8100
let server = Http.createServer(); // neue Variable "server" vom Typ Http Server wird erstellt
server.addListener("request", handleRequest); //  Der Variable "server" wird ein Listener gegeben, der auf "request" hört und dann die Funktion "handleRequest" ausführt
server.addListener("listening", handleListen); // Der Variable "server" wird ein Listener gegeben, der auf "listening" hört und dann die Funktion "handleListen" ausführt
server.listen(port); // die Variable "server" hört nun auf die Variable "port"
function handleListen() {
    console.log("Listening"); // die Funktion "handleListen gibt" "Listening" in der Konsole aus sobald Funktion ausgeführt wird
} // Funktion "handleListen" wird geschlossen
function handleRequest(_request, _response) {
    console.log("I hear voices!"); // Sobald die Funktion "handleRequest" ausgeführt wird, gibt die Konsole "I hear voices!" aus
    _response.setHeader("content-type", "text/html; charset=utf-8"); // Header Werte für Header Objekt werden definiert. Die Contentart, die Art des Dokuments "text/html", und die Unicode-Codierung "charset=utf-8" werden vorgegeben
    _response.setHeader("Access-Control-Allow-Origin", "*"); // "Acess-Control-Allow-Origin" wird zusätzlich als Header Wert festgelegt - erlaubt Webbrowsern oder Clients Zugriff über einen anderen Server oder andere Domain
    _response.write(_request.url); // _request.url wird in _responce.write in der URL geschrieben,vom Server so empfangen. Was hinter den Schrägstrich in der URL geschrieben wird, steht dann auch im Browser hinter dem Schrägstrich
    console.log(_request.url); // gibt die eingabe von _response.write auch im Terminal aus
    _response.end(); // _responce wird geschlossen/beendet, Server bekommt Nachricht das request nun fertig ist
} // Funktion handleRequest wird geschlossen
// namespace L05_Server wird geschlossen
//# sourceMappingURL=Server.js.map