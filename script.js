const input = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBox = document.getElementById("qrBox");

let qrCanvas = null;


// Generate QR Code

generateBtn.addEventListener("click", function () {

    const text = input.value.trim();


    if (text === "") {
        alert("Please enter text or URL");
        return;
    }


    qrBox.innerHTML = "";


    const canvas = document.createElement("canvas");

    qrBox.appendChild(canvas);


    QRCode.toCanvas(
        canvas,
        text,
        {
            width: 300,
            margin: 2
        },
        function (error) {

            if (error) {

                console.error(error);
                alert("QR generation failed");

                return;
            }

        }
    );


    qrCanvas = canvas;


    downloadBtn.style.display = "block";


});



// Download QR

downloadBtn.addEventListener("click", function () {


    if (!qrCanvas) {

        alert("Generate QR first");

        return;

    }


    const link = document.createElement("a");


    link.download = "BD-QR-Code.png";


    link.href = qrCanvas.toDataURL("image/png");


    link.click();


});
