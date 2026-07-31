const input = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBox = document.getElementById("qrBox");

let qrCreated = false;


generateBtn.addEventListener("click", function () {

    let text = input.value.trim();

    if (text === "") {
        alert("Please enter text or URL");
        return;
    }


    // Loading start
    generateBtn.innerHTML = "Generating...";
    generateBtn.disabled = true;


    qrBox.innerHTML = "";


    setTimeout(() => {

        new QRCode(qrBox, {
            text: text,
            width: 300,
            height: 300,
            colorDark: "#000000",
            colorLight: "#ffffff"
        });


        qrCreated = true;

        downloadBtn.style.display = "inline-block";


        // Loading end
        generateBtn.innerHTML = "Generate QR";
        generateBtn.disabled = false;


    }, 500);


});



downloadBtn.addEventListener("click", function () {


    if (!qrCreated) {
        alert("Generate QR first");
        return;
    }


    let canvas = qrBox.querySelector("canvas");
    let img = qrBox.querySelector("img");


    let url;


    if (canvas) {
        url = canvas.toDataURL("image/png");
    } 
    else if (img) {
        url = img.src;
    }
    else {
        alert("QR not found");
        return;
    }


    let link = document.createElement("a");

    link.href = url;

    link.download = "BD-QR-Code.png";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


});
