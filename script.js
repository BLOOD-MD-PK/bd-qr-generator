const input = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBox = document.getElementById("qrBox");

let qrImage = null;


// Generate QR

generateBtn.addEventListener("click", function(){

    let text = input.value.trim();

    if(text === ""){
        alert("Please enter text or URL");
        return;
    }


    qrBox.innerHTML = "";


    let qr = document.createElement("img");

    qr.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="
    + encodeURIComponent(text);


    qr.alt = "QR Code";


    qrBox.appendChild(qr);


    qrImage = qr;


    downloadBtn.style.display = "block";

});



// Download QR

downloadBtn.addEventListener("click", function(){

    if(!qrImage){
        alert("Generate QR first");
        return;
    }


    let link = document.createElement("a");

    link.href = qrImage.src;

    link.download = "BD-QR-Code.png";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

});
