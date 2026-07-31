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


    generateBtn.innerHTML = "Generating QR...";
    generateBtn.disabled = true;

    qrBox.innerHTML = "";



    setTimeout(() => {


        new QRCode(qrBox, {

            text: text,

            width: 350,

            height: 350,

            colorDark: "#000000",

            colorLight: "#ffffff",

            correctLevel: QRCode.CorrectLevel.H

        });



        qrCreated = true;


        downloadBtn.style.display = "inline-block";


        generateBtn.innerHTML = "Generate QR";

        generateBtn.disabled = false;


    }, 1500);



});



downloadBtn.addEventListener("click", function(){


let canvas = qrBox.querySelector("canvas");
let img = qrBox.querySelector("img");


let url;


if(canvas){

url = canvas.toDataURL("image/png");

}

else if(img){

url = img.src;

}

else{

alert("QR not found");

return;

}



let a = document.createElement("a");

a.href = url;

a.download = "BD-QR-Code.png";

a.click();



});
