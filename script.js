const input = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBox = document.getElementById("qrBox");

let qrGenerated = false;


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
            correctLevel: QRCode.CorrectLevel.H
        });


        qrGenerated = true;

        downloadBtn.style.display = "inline-block";

        generateBtn.innerText = "Generate QR";
        generateBtn.disabled = false;


    }, 1000);


});



downloadBtn.addEventListener("click", function () {


    if (!qrGenerated) {
        alert("Generate QR first");
        return;
    }


    let canvas = qrBox.querySelector("canvas");
    let image = qrBox.querySelector("img");


    let downloadURL;


    if (canvas) {

        downloadURL = canvas.toDataURL("image/png");

    } 
    else if (image) {

        downloadURL = image.src;

    }
    else {

        alert("QR image not found");
        return;

    }


    let a = document.createElement("a");

    a.href = downloadURL;

    a.download = "BD-QR-Code.png";

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);


});
