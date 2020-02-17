/*Error correction level
Error correction capability allows to successfully scan a QR Code even if the symbol is dirty or damaged. Four levels are available to choose according to the operating environment.

Higher levels offer a better error resistance but reduce the symbol's capacity.*/
var QRCode = require('qrcode')
// l for Low 7 % , M for medium 15%, Q for quartile 25% and H for high 30 %
QRCode.toString('some text', { errorCorrectionLevel: 'H',type:'terminal' }, function (err, url) {
  console.log(url)
})

// same data with low level error correction
QRCode.toString('some text', { errorCorrectionLevel: 'L',type:'terminal' }, function (err, url) {
  console.log(url)
})
