var QRCode = require('qrcode')
QRCode.toFile('qrimage.png', 'https://www.google.com/search?q=petergriffin', {
  color: {
    dark: '#00F',  // Blue dots
    light: '#0000' // Transparent background
  }
}, function (err) {
  if (err) throw err
  console.log('done')
})
