const fs = require('fs')
const path = require('path')

function getJSFileCount() {
  const dir = path.join(__dirname, '..', 'src')
  return fs.readdirSync(dir).filter((v) => /\.[tj]s$/.test(v)).length
}

console.log(getJSFileCount())
