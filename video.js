var output = document.getElementById("output");
var video = document.getElementById("video");
var aviso = document.getElementById("aviso");

function init() {      
    testWebSocket();
}

function testWebSocket() {
    websocket = new WebSocket("http://localhost:8080");
    websocket.addEventListener("open", (event) => {
        aviso.style.background = "#3498db";
        output.innerHTML = "<span style='color:#3498db'>Conectado</span>";
        video.innerHTML +="<video autoplay muted loop controls style='width:100%'><source src = 'simpsons.mp4' type = 'video/mp4' frameborder='0' style='border:0'></source></video>";
    });
    websocket.addEventListener("message", (event) => {
        output.innerHTML += "<span style='color:#e74c3c'>Error Conexión</span>";      
        aviso.style.background = "#e74c3c";
    });
    websocket.addEventListener("error", (event) => {
        output.innerHTML += '<span>Error conexión</span>';
        aviso.style.background = '#e74c3c';
    });
    websocket.addEventListener("close", (event) => {
        output.innerHTML = "<br><hr><span style='color: #f1c40f'>Conexión cerrada</span>"
    });
}

window.addEventListener("load", init, false);