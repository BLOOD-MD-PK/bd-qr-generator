const input = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBox = document.getElementById("qrBox");


generateBtn.onclick = function(){

    let text = input.value.trim();

    if(!text){
        alert("Enter text or URL");
        return;
    }


    generateBtn.innerText = "Generating...";


    qrBox.innerHTML = "";


    let canvas = document.createElement("canvas");


    QRCode.toCanvas(canvas, text, {
        width: 250,
        margin: 4,
        errorCorrectionLevel: "H"
    }, function(error){

        if(error){
            console.log(error);
            alert("QR Error");
            generateBtn.innerText = "Generate QR";
            return;
        }


        qrBox.appendChild(canvas);

        downloadBtn.style.display="inline-block";

        generateBtn.innerText="Generate QR";

    });


};



downloadBtn.onclick=function(){

    let canvas = qrBox.querySelector("canvas");

    if(!canvas){
        alert("Generate QR first");
        return;
    }


    let link=document.createElement("a");

    link.download="BD-QR-Code.png";

    link.href=canvas.toDataURL("image/png");

    link.click();

};
