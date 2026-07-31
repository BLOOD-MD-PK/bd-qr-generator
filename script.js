const input = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBox = document.getElementById("qrBox");

let qrImage = null;


generateBtn.addEventListener("click", () => {

    const text = input.value.trim();

    if(text === ""){
        alert("Please enter text or URL");
        return;
    }


    qrBox.innerHTML = "";


    const img = document.createElement("img");

    img.width = 250;
    img.height = 250;

    img.alt = "Generated QR Code";


    img.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data="
    + encodeURIComponent(text);



    qrBox.appendChild(img);


    qrImage = img;


    downloadBtn.style.display = "block";


});



downloadBtn.addEventListener("click", () => {


    if(!qrImage){

        alert("Generate QR first");

        return;

    }


    const link = document.createElement("a");


    link.href = qrImage.src;

    link.download = "BD-QR-Code.png";


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


});
