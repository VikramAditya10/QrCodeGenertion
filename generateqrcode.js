var QRCode = require('qrcode')

// generate qr code in data URL
QRCode.toDataURL('I am a pony!', function (err, url) {
  console.log(url)
})
// render qr code for terminal
QRCode.toString('Vikram Aditya',{type:'terminal'},(err,url)=>console.log(url))
// With promises

QRCode.toString('Vikram Aditya',{type:'terminal'})
.then(url=>{console.log(url)})
.catch(err=>console.log(err))

//
