const input = document.getElementById("qrText");

const generateBtn = document.getElementById("generateBtn");

const downloadBtn = document.getElementById("downloadBtn");

const qrBox = document.getElementById("qrBox");



generateBtn.addEventListener("click", function(){


let text = input.value.trim();



if(text === ""){

alert("Please enter text or URL");

return;

}



qrBox.innerHTML = "";



new QRCode(qrBox, {

text: text,

width: 300,

height: 300,

colorDark: "#000000",

colorLight: "#ffffff"

});



downloadBtn.style.display = "block";



});




downloadBtn.addEventListener("click", function(){



let qrImage = qrBox.querySelector("img");



if(!qrImage){

alert("Generate QR first");

return;

}



let link = document.createElement("a");


link.href = qrImage.src;


link.download = "BD-QR-Code.png";


link.click();



});
