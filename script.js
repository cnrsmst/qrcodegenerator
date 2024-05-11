function generateQRCode() {
  let url = document.getElementById("urlInput").value;
  let qrcodeDiv = document.getElementById("qrcode");
 
  if (url) {
    
    // Generate new QR code
   let qrcode = new QRCode(qrcodeDiv, {
      text: url,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
    
  } else {
    alert("Geçerli bir url girmediniz.");
    qrcodeDiv.innerHTML = "";
  }
}


