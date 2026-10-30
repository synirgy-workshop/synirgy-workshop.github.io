// Run with `node scripts/create-social-preview.cjs` after installing dependencies.
const sharp = require('sharp')
const path = require('node:path')
const root = path.resolve(__dirname, '..')
async function main() {
  const art = await sharp(path.join(root, 'public/images/synthetic-landscape.webp'))
    .resize(560, 630, { fit: 'cover' }).toBuffer()
  const text = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <g font-family="Avenir Next, Arial, sans-serif" fill="#142f62">
      <text x="58" y="79" font-size="23">The Web Conference 2027</text>
      <text x="51" y="224" font-size="100" font-weight="600" letter-spacing="-5">SynIRgy</text>
      <g font-size="31"><text x="58" y="303">Simulation and Synthetic Data</text><text x="58" y="349">for Web-Scale</text><text x="58" y="395">Information Access</text></g>
      <text x="58" y="487" font-size="23">Dublin, Ireland · May 2027</text>
    </g>
    <rect x="0" y="552" width="1200" height="78" fill="#142f62"/>
    <text x="58" y="600" font-family="Avenir Next, Arial, sans-serif" font-size="23" fill="white">synirgy-workshop.github.io</text>
  </svg>`)
  await sharp({create:{width:1200,height:630,channels:3,background:'#eaf2fc'}})
    .composite([{input:art,left:640,top:0},{input:text,left:0,top:0}])
    .jpeg({quality:90}).toFile(path.join(root, 'public/images/social-preview.jpg'))
}
main().catch(error => { console.error(error); process.exitCode=1 })
