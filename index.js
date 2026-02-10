let btn = document.querySelector("button");
let url = document.querySelector("#url");
let img = document.querySelector("img");

function generateQr() {
  img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + url.value;
}