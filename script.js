alert("JS LOAD HO GYA");
const input = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBox = document.getElementById("qrBox");


generateBtn.onclick = function(){

    let text = input.value.trim();


    if(text === ""){
        alert("Enter text or URL");
        return;
    }


    generateBtn.innerText = "Generating...";
    generateBtn.disabled = true;


    qrBox.innerHTML = "";


    setTimeout(function(){


        new QRCode(qrBox, {

            text: text,

            width: 250,

            height: 250,

            correctLevel: QRCode.CorrectLevel.H

        });


        downloadBtn.style.display = "inline-block";


        generateBtn.innerText = "Generate QR";
        generateBtn.disabled = false;


    },1000);


};



downloadBtn.onclick=function(){

    let img = qrBox.querySelector("img");


    if(!img){
        alert("Generate QR first");
        return;
    }


    let a=document.createElement("a");

    a.href=img.src;

    a.download="BD-QR-Code.png";

    a.click();


};
