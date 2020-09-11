const sharp = require('sharp')
const path = require('path')

const logoPath = path.join(process.cwd(), 'dominant-baseline.svg')

sharp(logoPath)
  .png({ compressionLevel: 1 })
  .toFile(logoPath.replace(/\..*/, '.png'))
