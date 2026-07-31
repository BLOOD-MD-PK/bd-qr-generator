const input = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBox = document.getElementById("qrBox");


generateBtn.addEventListener("click", function () {

    const text = input.value.trim();

    if (!text) {
        alert("Enter text or URL");
        return;
    }


    generateBtn.innerText = "Generating...";
    generateBtn.disabled = true;


    qrBox.innerHTML = "";


    setTimeout(() => {


        new QRCode(qrBox, {

            text: text,

            width: 220,

            height: 220,

            colorDark: "#000000",

            colorLight: "#ffffff",

            correctLevel: QRCode.CorrectLevel.H

        });


        generateBtn.innerText = "Generate QR";
        generateBtn.disabled = false;

        downloadBtn.style.display = "inline-block";


    }, 1000);


});



downloadBtn.addEventListener("click", function () {


    const img = qrBox.querySelector("img");


    if (!img) {
        alert("Generate QR first");
        return;
    }


    const link = document.createElement("a");

    link.href = img.src;

    link.download = "BD-QR-Code.png";

    link.click();


});
